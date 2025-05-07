"use client";

import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { Check } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_y0z2kp4', // Replace with your EmailJS service ID
      'template_j00beg6', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'yC39Q7cGMSY_fwzr6' // Replace with your EmailJS public key
    )
    .then(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <section className="w-full mt-[-40px] px-4 py-16 text-white" id="contact">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        <div className="text-4xl font-bold relative pb-2 mb-10 text-left" data-aos="fade-right">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
        </div>
      </div>

      <div className="w-full mt-9 max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Left Side */}
        <div className="w-full md:w-5/12 lg:w-4/12 mb-8 md:mb-0">
          <h3 className="text-sm mt-6 mb-3 text-gray-400 tracking-wider">CONTACT INFO</h3>

          <div className="flex items-start mb-5 gap-4 text-gray-300">
            <FaEnvelope className="text-xl text-gray-500 mt-1" />
            <p>adwaita.tathwamasi@gmail.com</p>
          </div>

          <div className="flex items-start mb-5 gap-4 text-gray-300">
            <FaPhoneAlt className="text-xl text-gray-500 mt-1" />
            <p>+91 9778046647</p>
          </div>

          <div className="flex items-start mb-5 gap-4 text-gray-300">
            <FaMapMarkerAlt className="text-xl text-gray-500 mt-1" />
            <p>Kollam, Kerala, India</p>
          </div>

          <h3 className="text-sm mt-6 mb-3 text-gray-400 tracking-wider">SOCIAL INFO</h3>
          <div className="flex gap-4 mt-3">
            <a 
              href="https://www.linkedin.com/in/adwaita-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-gray-500 transition text-gray-500"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/adwaita-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-gray-500 transition text-gray-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-6/12 lg:w-7/12 bg-zinc-900 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl mb-4 font-bold">
            Let's work <span className="text-purple-600">together.</span>
          </h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 transition-all duration-500 ease-in-out">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg animate-pulse">
                <Check size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-200 mb-2">Message Sent!</h3>
              <p className="text-gray-300 text-center max-w-md">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="p-3 rounded-lg bg-black text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="p-3 rounded-lg bg-black text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject *"
                required
                className="p-3 rounded-lg bg-black text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                required
                className="p-3 rounded-lg bg-black text-white outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;