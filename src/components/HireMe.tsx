import React, { useState } from "react";

const HireMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

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
      const response = await fetch(`${BASE_URL}/send-email`, {
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
    <div className="w-screen min-h-10 p-[15px]">
      <div className="md:max-w-lg max-w-6xl mx-auto text-white">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Send me a message!
          </h1>
          <div className="h-[2px] rounded-lg mt-3 mb-6 bg-primary-400 max-w-[150px]" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 w-full"
        >
          <div>
            <label className="block text-base font-semibold pb-2 text-text-secondary">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-sm p-3 bg-background-secondary text-white rounded-lg placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-base font-semibold pb-2 text-text-secondary">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-sm p-3 text-white bg-background-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition placeholder-text-tertiary"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-base pb-2 text-text-secondary">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Tell me about your project or opportunity..."
              onChange={handleChange}
              className="w-full text-sm p-3 text-white bg-background-secondary rounded-lg placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              rows={5}
              required
            />
          </div>
          {/* Confirmation Message */}
          {isSubmitted && (
            <p
              id="confirmationMessage"
              className="mt-2 text-success font-semibold text-center"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          <button
            type="submit"
            className={`w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
