import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 pb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black dark:text-white">Get in touch</h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">Whether it's a freelance gig, a collaboration, a full-time opportunity, or you just want to say hi—I'm always excited to connect with people who love building meaningful things. Drop a message, and I'll get back to you as soon as I can!</p>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field" 
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
          className={`px-8 py-3 rounded-xl font-bold shadow-lg transition text-lg border border-gray-300 dark:border-gray-700 ${
            'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200'
          }`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact; 