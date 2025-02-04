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
            <div className="md:max-w-lg max-w-6xl mx-auto text-white relative">
                <div>
                    <p className="text-2xl mt-[10px] text-[20px] font-nunito font-bold">Leave a comment!</p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[168px]" />

                <div className="absolute top-[16px] right-[0px]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="text-sm p-2 border-b border-gray-700 bg-gray-800 text-white rounded-t-md placeholder-opacity-50 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="bg-gray-800 w-full h-60 p-4 rounded-md flex flex-col justify-between">
                    <div className="flex-1 overflow-y-auto px-2">
                        {loading ? (
                            <p className="text-gray-500">Loading comments...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : comments.length > 0 ? (
                            comments.map((comment) => (
                                <p key={comment.id} className="text-gray-400">
                                    <strong>{comment.name}:</strong> {comment.message}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet.</p>
                        )}
                    </div>

                    <form
                        className="flex font-nun items-center mt-[10px] bg-gray-700 p-0 rounded-md"
                        onSubmit={(e) => {
                            e.preventDefault();
                            postComment();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Enter message - please be nice!"
                            className="flex-1 text-sm p-2 text-white bg-transparent rounded-md placeholder-opacity-50 placeholder-white focus:outline-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-gray-500 text-xs hover:bg-gray-300 text-white font-bold py-2 px-4 w-auto ml-2 rounded"
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