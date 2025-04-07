'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone, message } = formData;
    if (!validateEmail(email)) return setError('Please enter a valid email.');
    if (!phone.trim()) return setError('Phone number is required.');
    if (!message.trim()) return setError('Message is required.');

    setSuccess(true);
    setError('');
    window.location.href = `mailto:your.email@example.com?subject=New Message from ${formData.name}&body=Phone: ${phone}%0D%0A${message}`;
  };

  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-10">Let’s Connect</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name (optional)"
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email *"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone Number *"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message *"
            required
            rows={5}
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">Message sent successfully!</p>}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
