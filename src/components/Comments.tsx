import React from 'react';
import axios from 'axios';

const Comments = () => {
    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">
                <div>
                    <p className="text-2xl my-[10px] text-[28px]">Leave a comment!</p>
                </div>
                <div className="bg-gray-800 w-full p-4 h-6 rounded-md">
                    <form
                        className="flex items-center bg-gray-800 p-3 rounded-md"
                    >
                        <input
                            type="text"
                            placeholder="Enter message - please be nice!"
                            className="flex-1 p-2 text-black rounded-md focus:outline-none"
                        />
                        <button className="bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Comments;
