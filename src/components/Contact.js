import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setStatus(""); // Reset status

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const data = await response.json();
        setStatus(data.message || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">
        Contact Me
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center">
        I’d love to hear from you! Whether you have a question, a project idea,
        or just want to connect, feel free to reach out.
      </p>

      {/* Contact Form */}
      <div className="mt-12 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button with Loader */}
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full font-medium py-3 rounded-lg transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              {status}
            </p>
          )}
        </form>
      </div>
      <div className="mt-12 text-center pb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Connect with Me
        </h2>
        <div className="flex justify-center mt-6 space-x-6">
          {/* Email */}
          <a
            href="mailto:neelvaidya133@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaEnvelope size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/neelvaidya133"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/neelvaidya133"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
