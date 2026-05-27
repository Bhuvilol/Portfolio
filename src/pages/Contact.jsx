import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_ks1eyyj',
        'template_1b4tqbk',
        e.target,
        'VrXDK_z9SuxQKnxa3'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 pb-8">
      <SectionHeading>contact</SectionHeading>
      <p className="mb-8 text-hacker-muted text-base leading-relaxed font-sans">
        Whether you're offering a gig, a collab, or just want to say "Hey hacker man!", I'm all ears (and eyes, and keyboards). Drop your message below.
      </p>
      
      {submitStatus === 'success' && (
        <div className="mb-6 border border-hacker-green/30 rounded p-4 font-mono text-sm">
          <span className="text-hacker-green">[✓]</span> <span className="text-hacker-text">Message sent successfully. I'll get back to you soon.</span>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-6 border border-hacker-red/30 rounded p-4 font-mono text-sm">
          <span className="text-hacker-red">[✗]</span> <span className="text-hacker-text">Something went wrong. Try again or contact me directly.</span>
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4"
      >
        <input 
          type="text" 
          name="user_name"
          placeholder=">> your_name"
          className="px-4 py-3 rounded border border-hacker-border bg-hacker-surface text-hacker-text font-mono text-sm placeholder-hacker-muted/50 focus:border-hacker-green transition-colors" 
          required 
        />
        <input 
          type="email" 
          name="user_email"
          placeholder=">> your_email"
          className="px-4 py-3 rounded border border-hacker-border bg-hacker-surface text-hacker-text font-mono text-sm placeholder-hacker-muted/50 focus:border-hacker-green transition-colors" 
          required 
        />
        <textarea 
          name="message"
          placeholder=">> your_message"
          className="px-4 py-3 rounded border border-hacker-border bg-hacker-surface text-hacker-text font-mono text-sm placeholder-hacker-muted/50 focus:border-hacker-green transition-colors" 
          rows={5} 
          required 
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`px-6 py-2.5 rounded font-mono text-sm transition-all duration-300 border ${
            isSubmitting 
              ? 'border-hacker-border text-hacker-muted cursor-not-allowed'
              : 'border-hacker-green text-hacker-green hover:bg-hacker-green/10'
          }`}
        >
          {isSubmitting ? '[...] sending' : '[>] send_message'}
        </button>
      </form>
    </section>
  );
};

export default Contact; 