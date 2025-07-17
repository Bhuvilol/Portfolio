import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Netlify Forms will handle the submission, but for instant feedback:
    const formData = new FormData(e.target);
    const data = new URLSearchParams();
    for (const pair of formData) {
      data.append(pair[0], pair[1]);
    }
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 pb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white">Get in touch</h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">Whether it's a freelance gig, a collaboration, a full-time opportunity, or you just want to say hi—I'm always excited to connect with people who love building meaningful things. Drop a message, and I'll get back to you as soon as I can!</p>
      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg p-4">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
          Something went wrong. Please try again or contact me directly.
        </div>
      )}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field" 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-6"
      >
        {/* Netlify Forms hidden input */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <input 
          type="text" 
          name="name"
          placeholder="Your Name"
          className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white text-lg" 
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email"
          className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white text-lg" 
          required 
        />
        <textarea 
          name="message"
          placeholder="Your Message"
          className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white text-lg" 
          rows={5} 
          required 
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-xl font-bold shadow-lg transition text-lg border border-gray-300 dark:border-gray-700 ${
            isSubmitting 
              ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed'
              : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact; 