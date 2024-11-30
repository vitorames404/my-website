import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = () => {

    type Comment = {
        id: number;
        name: string;
        message: string;
    };

    // State to store the fetched comments
    const [comments, setComments] = useState<Comment[]>([]);
    const [message, setMessage] = useState<string>("");

    // Function to fetch comments
    const getComments = async () => {
        try {
            const res = await axios.get<Comment[]>("http://localhost:5000/comments");
            setComments(res.data); // Update state with fetched comments
        } catch (err) {
            console.error("Error fetching comments:", err);
        }
    };

    // Function that will post a comment
    const postComment = async () => {
        
        try{

            const name = "Anonymous";
        
            const url = "http://localhost:5000/comments";

            const res = await axios.post(url, {name, message});

            setComments([...comments, res.data]);

            setMessage("");

        } catch (err){
            console.error("Error posting a new comment :(", err);
        }
    }

    // Fetch comments on component mount
    useEffect(() => {
        getComments();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="w-screen min-h-screen p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div>
                    <p className="text-2xl my-[10px] text-[28px]">Leave a comment!</p>
                </div>
                {/* Comment box container */}
                <div className="bg-gray-800 w-full h-60 p-4 rounded-md flex flex-col justify-between">
                    {/* Comments display area */}
                    <div className="flex-1 overflow-y-auto p-2">
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
                    {/* Input form at the bottom */}
                    <form 
                    className="flex items-center bg-gray-700 p-1 rounded-md"
                    onSubmit={(e) => {
                            e.preventDefault();
                            postComment(); // Call postComment on form submit
                        }}
                    >
                    
                    <input
                        type="text"
                        placeholder="Enter message - please be nice!"
                        className="flex-1 text-sm p-2 text-white bg-transparent rounded-md placeholder-opacity-50 placeholder-white focus:outline-none"
                        value={message} // Controlled input bound to message state
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
