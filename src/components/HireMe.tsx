import React, { useState } from "react";

const HireMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" }); // Clear inputs
        setIsSubmitted(true); // Show success message
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-10">
      <div className="md:max-w-lg max-w-6xl mx-auto text-white">
        <div className="p-4 max-w-lg mx-auto">
          <h1 className="flex text-[20px] font-bold py-1 font-nunito space-x-2 items-center">
            <span>Send me a message!</span>
          </h1>
          <div className="h-[3px] rounded-lg mb-4 bg-gray-600 max-w-[190px]" />
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full rounded-md flex flex-col justify-between"
          >
            <div>
              <label className="block text-[16px] pb-2 font-nunito font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Frodo Baggins"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full flex-1 text-sm p-2 bg-gray-800 bg-opacity-80 text-white rounded-md placeholder-opacity-50 placeholder-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[16px] py-2 font-nunito font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="frodo@shiremail.me"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 text-sm p-2 text-white bg-gray-800 bg-opacity-80 rounded-md focus:outline-none w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-[16px] font-nunito py-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="We need your wisdom to craft the defenses of Rivendell against the forces of Mordor. Payment: 10 mithril ingots!!!"
                onChange={handleChange}
                className="flex-1 w-full text-sm p-2 text-white bg-gray-800 bg-opacity-80 rounded-md placeholder-opacity-50 placeholder-white focus:outline-none"
                rows={4}
                required
              />
            </div>
            {/* Confirmation Message */}
            {isSubmitted && (
              <p
                id="confirmationMessage"
                className="mt-2 text-green-500 font-medium text-center"
              >
                Message was sent! Thank you!
              </p>
            )}
            <button
              type="submit"
              className={`bg-gray-500 text-sm text-white px-[50px] py-2 rounded mx-auto block hover:bg-gray-400 transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
