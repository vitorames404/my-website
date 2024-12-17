import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = () => {
    type Comment = {
        id: number;
        name: string;
        message: string;
    };

    const [comments, setComments] = useState<Comment[]>([]);
    const [message, setMessage] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    const getComments = async () => {
        try {
            const res = await axios.get<Comment[]>("http://localhost:5000/comments");
            setComments(res.data);
        } catch (err) {
            console.error("Error fetching comments:", err);
        }
    };

    const postComment = async () => {
        try {
            const url = "http://localhost:5000/comments";
            const res = await axios.post(url, { name: username || "Anonymous", message });

            setComments([...comments, res.data]);
            setMessage("");
        } catch (err) {
            console.error("Error posting a new comment :(", err);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="w-screen min-h-screen px-[15px]">
            {/* Wrapper */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white relative">
                {/* Title */}
                <div>
                    <p className="text-2xl mt-[10px] text-[20px] font-nunito font-bold">Leave a comment!</p>
                </div>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[168px]" />

                {/* Username Input */}
                <div className="absolute top-[16px] right-[0px]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="text-sm p-2 border-b border-gray-700 bg-gray-800 text-white rounded-t-md placeholder-opacity-50 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                {/* Comment box container */}
                <div className="bg-gray-800 w-full h-60 p-4 rounded-md flex flex-col justify-between">
                    {/* Comments display area */}
                    <div className="flex-1 overflow-y-auto px-2">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <p key={comment.id} className="text-gray-400">
                                    <strong>{comment.name}:</strong> {comment.message}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet.</p>
                        )}
                    </div>

                    {/* Input form */}
                    <form
                        className="flex font-nun items-center bg-gray-700 p-0 rounded-md"
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
