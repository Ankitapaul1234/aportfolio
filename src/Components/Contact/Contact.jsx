import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zryhtnd",     // Replace with your EmailJS service ID
        "template_8ayhb6a",    // Replace with your EmailJS template ID
        form.current,
        "BtciOjyJK9lnFVTRl"      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-16 px-4">
      {/* Animated connected Earth GIF */}
  


      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-gray-800 text-white border border-[#d4ac0d] focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-gray-800 text-white border border-[#d4ac0d] focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-md bg-gray-800 text-white border border-[#d4ac0d] focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            {/* className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md transition duration-300" */}
          className="mt-5 text-white py-2 px-6 w-40 md:w-48
                text-sm md:text-lg font-semibold rounded-3xl
                bg-[#d4ac0d] border-2 border-white
                shadow-lg transition-all duration-300 ease-in-out
                hover:bg-white hover:text-[#d4ac0d] hover:scale-105 hover:shadow-yellow-500/50"
          >
            Send Message
          </button>
          {done && <span className="text-green-400 mt-2">Thanks for reaching out!</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
