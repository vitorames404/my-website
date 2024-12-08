import React, {useState} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
                <h1 className="text-3xl font-bold mb-4">Hire Me</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        required
                    />
                    </div>
                    <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                    Send
                    </button>
                </form>
                {isSubmitted && <p className="mt-4 text-green-500">Message sent successfully!</p>}
                </div>
            </div>
        </div>
    );
};

export default HireMe;
