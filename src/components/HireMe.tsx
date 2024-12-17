import React, {useState} from 'react';
import { FiTerminal, FiSend, FiUser, FiEdit2 } from "react-icons/fi";

const HireMe: React.FC  = () => {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } else {
            console.error("Failed to send email");
        }
        } catch (error) {
        console.error("Error:", error);
        }
    };

    return (
        <div className="w-screen min-h-10 p-[15px]">
            {/* Wrapper to centralize and set max width */}
            <div className="md:max-w-lg max-w-6xl mx-auto text-white">

                <div className="p-4 max-w-lg mx-auto">
                <h1 className="flex text-[20px] font-bold mt-4 py-1 font-nunito space-x-2 items-center">
                    <span>Send me a message!</span>
                    {/* <FiSend size={22}/> */}
                </h1>
                <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[190px]" />
                <form onSubmit={handleSubmit} className="space-y-4 w-full rounded-md flex flex-col justify-between">
                    <div>
                        <label className="block text-[18px] pb-2 font-nunito font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full flex-1 text-sm p-2 bg-gray-800 bg-opacity-80 text-white rounded-md placeholder-opacity-50 placeholder-white focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[18px] py-2 font-nunito font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex-1 text-sm p-2 text-white bg-gray-800 bg-opacity-80 rounded-md focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-[18px] font-nunito py-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="flex-1 w-full text-sm p-2 text-white bg-gray-800 bg-opacity-80 rounded-md placeholder-opacity-50 placeholder-white focus:outline-none"
                            rows={4}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-500 text-sm text-white px-[50px] py-2 rounded mx-auto block hover:bg-gray-400 transition duration-200"
                    >
                        Send
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
