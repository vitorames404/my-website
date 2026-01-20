import { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
    type Comment = {
        id: number;
        name: string;
        message: string;
    };

    const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
    const WS_URL = BASE_URL.replace(/^http/, "ws"); // Converts HTTP URL to WebSocket
    const [comments, setComments] = useState<Comment[]>([]);
    const [message, setMessage] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch comments from the backend
    const getComments = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get<Comment[]>(`${BASE_URL}/comments`);
            setComments(res.data);
        } catch (err) {
            console.error("Error fetching comments:", err);
            setError("Failed to fetch comments. Please try again later.");
            if (axios.isAxiosError(err)) {
                console.error("Axios error details:", err.response?.data || err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    // Post a new comment
    const postComment = async () => {
        setError(null);
        if (!message.trim()) {
            setError("Message cannot be empty.");
            return;
        }

        try {
            const url = `${BASE_URL}/comments`;
            const res = await axios.post(url, { name: username || "Anonymous", message });

            // Update the comments list with the new comment
            setComments((prevComments) => [...prevComments, res.data]);
            setMessage(""); // Clear the message input
        } catch (err) {
            console.error("Error posting a new comment:", err);
            setError("Failed to post the comment. Please try again.");
            if (axios.isAxiosError(err)) {
                console.error("Axios error details:", err.response?.data || err.message);
            }
        }
    };

    useEffect(() => {
        // Fetch comments and connect to WebSocket
        const fetchDataAndConnect = async () => {
            await getComments();

            const ws = new WebSocket(WS_URL);

            ws.onmessage = (event) => {
                try {
                    const newComment: Comment = JSON.parse(event.data);
                    setComments((prevComments) => [...prevComments, newComment]);
                } catch (err) {
                    console.error("Error parsing WebSocket message:", err);
                }
            };

            ws.onopen = () => {
                console.log("Connected to WebSocket");
            };

            ws.onclose = () => {
                console.log("Disconnected from WebSocket");
            };

            ws.onerror = (err) => {
                console.error("WebSocket error:", err);
            };

            return () => {
                ws.close();
            };
        };

        fetchDataAndConnect();
    }, [WS_URL]);

    return (
        <div className="w-screen min-h-screen px-[15px]">
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div className="mb-6">
                    <p className="text-3xl font-bold">Leave a comment!</p>
                    <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[120px]" />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username (optional)"
                        className="text-sm p-3 border-b-2 border-primary-400 bg-background-secondary text-white rounded-md placeholder-text-tertiary focus:outline-none focus:border-primary-300 w-full max-w-xs transition"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="bg-background-secondary bg-opacity-80 w-full h-64 p-4 rounded-lg flex flex-col justify-between border border-border-light">
                    <div className="flex-1 overflow-y-auto px-3 space-y-2">
                        {loading ? (
                            <p className="text-text-tertiary text-sm">Loading comments...</p>
                        ) : error ? (
                            <p className="text-error text-sm">{error}</p>
                        ) : comments.length > 0 ? (
                            comments.map((comment) => (
                                <p key={comment.id} className="text-text-secondary text-sm leading-relaxed">
                                    <span className="font-semibold text-primary-400">{comment.name}:</span> {comment.message}
                                </p>
                            ))
                        ) : (
                            <p className="text-text-tertiary text-sm">No comments yet. Be the first!</p>
                        )}
                    </div>

                    <form
                        className="flex items-center mt-4 bg-background-tertiary p-2 rounded-lg gap-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            postComment();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Enter message - please be nice!"
                            className="flex-1 text-sm p-2 text-white bg-transparent rounded placeholder-text-tertiary focus:outline-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded transition duration-200 text-sm"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Comments;