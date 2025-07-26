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
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin" 
            width="100%" 
            height="auto" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: '#00bfff', marginBottom: '1rem' }}>Thank you!</h3>
              <p style={{ color: '#ccc' }}>Your message has been sent successfully. We&apos;ll get back to you soon!</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn"
                style={{ marginTop: '1rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" className="contact-form-txt" required />
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                pattern="[0-9]{10}" 
                required 
                placeholder="Contact number" 
                maxLength={10} 
                className="contact-form-phone" 
              />
              <input type="email" name="email" placeholder="Email" className="contact-form-email" required />
              <textarea 
                placeholder="Your Message" 
                name="message" 
                className="contact-form-txtarea" 
                required
              ></textarea>
              <input type="submit" value="Submit" name="submit" className="contact-form-btn" />
            </form>
          )}
        </div>
      </div>
    </>
  );
} 