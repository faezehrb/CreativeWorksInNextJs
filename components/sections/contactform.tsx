
'use client'
import React from 'react';
import emailjs from 'emailjs-com'; 
import ForthSoulSVG from '../svg/forthSoulSVG';

const ContactForm = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9zvjl25', 'template_7vnkzpw', e.target, 'VRJewbjohGOIRROkz')
      .then(
        (result) => {
          alert('Thanks for your message, it sent successfully!');
          e.target.reset()
        },
        (error) => {
          alert('I cannot get your message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <div className="container mx-auto px-1 min-h-screen grid content-center justify-items-center">
      <ForthSoulSVG />
      <form className="w-96" onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            type="text" name="user_name"
            id="name"
            placeholder="Your Name"
            required
            className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            type="email" name="user_email"
            id="email"
            placeholder="Your Email"
            required
            className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-white">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
 
};

export default ContactForm;
