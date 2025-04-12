import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-blue-950">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Have questions or need help? Fill out the form and we'll get back to you shortly.
      </p>

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto bg-blue-100 p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
