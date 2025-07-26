'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Form submitted');
  };

  return (
    <>
      <section id="contact" className="contact">
        <h1 className="heading">Get in touch!</h1>
      </section>
      <div className="contact-in">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="contact-form-txt" required />
            <input type="tel" placeholder="Contact number" className="contact-form-phone" required />
            <input type="email" placeholder="Email" className="contact-form-email" required />
            <textarea placeholder="Your Message" className="contact-form-txtarea" required></textarea>
            <button type="submit" className="contact-form-btn">
              {isSubmitted ? 'Message Sent!' : 'Submit'}
            </button>
          </form>
        </div>
        
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193595.25436351647!2d-75!3d42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1644684739958!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
} 