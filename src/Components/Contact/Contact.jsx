// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();
//   const [done, setDone] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zryhtnd",     // Replace with your EmailJS service ID
//         "template_8ayhb6a",    // Replace with your EmailJS template ID
//         form.current,
//         "BtciOjyJK9lnFVTRl"      // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           form.current.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="min-h-screen bg-gray-900 text-white py-16 px-4">
//       {/* Animated connected Earth GIF */}
  


//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
//         <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           />
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             required
//             className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           ></textarea>
//           <button
//             type="submit"
//              className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md transition duration-300" 
//           >
//             Send Message
//           </button>
//           {done && <span className="text-green-400 mt-2">Thanks for reaching out!</span>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;





















// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();
//   const [done, setDone] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zryhtnd",
//         "template_8ayhb6a",
//         form.current,
//         "BtciOjyJK9lnFVTRl"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           form.current.reset();
//           setTimeout(() => setDone(false), 5000);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="min-h-screen bg-gray-900 text-white py-16 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
//           Let's <span className="text-yellow-400">talk</span>
//         </h2>
        
//         <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
//           To request an update or want to meet up for coffee, contact me directly 
//           or fill out the form and I will get back to you soon.
//         </p>

//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           {/* Contact Information Section */}
//           <div className="lg:w-1/2">
//             <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
//               <h3 className="text-2xl font-bold mb-6 text-yellow-400">Get in Touch</h3>
              
//               <div className="space-y-6 mb-8">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-yellow-400/10 rounded-lg">
//                     <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Email</h4>
//                     <p className="text-gray-400">ankitapaul1306@gmail.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-yellow-400/10 rounded-lg">
//                     <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Location</h4>
//                     <p className="text-gray-400">Kolkata, India</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 bg-gray-900/50 rounded-xl">
//                 <h4 className="font-bold mb-2">Why Contact Me?</h4>
//                 <ul className="space-y-2 text-gray-400">
//                   <li className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                     Project collaborations
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                     Freelance opportunities
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                     Technical discussions
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                     Coffee meetups
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className="lg:w-1/2">
//             <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
//               <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Message</h3>
              
//               <form ref={form} onSubmit={sendEmail} className="space-y-6">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-300">Your Name</label>
//                   <input
//                     type="text"
//                     name="user_name"
//                     placeholder="Enter your full name"
//                     required
//                     className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 
//                              focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
//                              transition-all duration-300 placeholder-gray-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-300">Your Email</label>
//                   <input
//                     type="email"
//                     name="user_email"
//                     placeholder="Enter your email address"
//                     required
//                     className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 
//                              focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
//                              transition-all duration-300 placeholder-gray-500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-300">Your Message</label>
//                   <textarea
//                     name="message"
//                     rows="6"
//                     placeholder="Type your message here..."
//                     required
//                     className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 
//                              focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
//                              transition-all duration-300 placeholder-gray-500 resize-none"
//                   ></textarea>
//                 </div>

//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 
//                              text-white font-semibold border-2 border-yellow-400
//                              hover:from-yellow-600 hover:to-amber-700 hover:scale-[1.02]
//                              active:scale-[0.98] transition-all duration-300
//                              flex items-center justify-center gap-3"
//                   >
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                     SEND MESSAGE
//                   </button>
                  
//                   {done && (
//                     <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
//                       <div className="flex items-center gap-3 text-green-400">
//                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         <span className="font-medium">Thanks for reaching out! I'll get back to you soon.</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="mt-16 text-center">
//           <h4 className="text-xl font-semibold mb-6">Connect with me on</h4>
//           <div className="flex justify-center gap-6">
//             {["github", "linkedin", "twitter", "instagram"].map((platform) => (
//               <a
//                 key={platform}
//                 href="#"
//                 className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400/10 
//                          border border-gray-700 hover:border-yellow-400
//                          transition-all duration-300 group"
//               >
//                 <div className="w-6 h-6 flex items-center justify-center">
//                   <span className="text-gray-400 group-hover:text-yellow-400 font-medium">
//                     {platform.charAt(0).toUpperCase()}
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


















import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zryhtnd",
        "template_8ayhb6a",
        form.current,
        "BtciOjyJK9lnFVTRl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setTimeout(() => setDone(false), 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-yellow-400">talk</span>
        </h2>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          To request an update or want to meet up for coffee, contact me directly 
          or fill out the form and I will get back to you soon.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your full name"
                    required
                    className="w-full p-4 rounded-xl bg-black text-white border border-gray-800 
                             focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
                             transition-all duration-300 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email address"
                    required
                    className="w-full p-4 rounded-xl bg-black text-white border border-gray-800 
                             focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
                             transition-all duration-300 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Your Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Type your message here..."
                    required
                    className="w-full p-4 rounded-xl bg-black text-white border border-gray-800 
                             focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
                             transition-all duration-300 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 
                             text-white font-semibold border-2 border-yellow-400
                             hover:from-yellow-600 hover:to-amber-700 hover:scale-[1.02]
                             active:scale-[0.98] transition-all duration-300
                             flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    SEND MESSAGE
                  </button>
                  
                  {done && (
                    <div className="mt-4 p-4 bg-green-900/30 border border-green-500/30 rounded-xl">
                      <div className="flex items-center gap-3 text-green-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Thanks for reaching out! I'll get back to you soon.</span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Phone Call Image */}
          <div className="lg:w-1/2">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://img.freepik.com/premium-photo/golden-phone-call-symbol-black-background-3d-rendering_519469-7341.jpg")'
                }}
              >
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Direct Contact</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-400/20 rounded-lg backdrop-blur-sm">
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-300">ap6102951@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-400/20 rounded-lg backdrop-blur-sm">
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-gray-300">Kolkata, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Let's Connect For Hiring Section */}
                <div className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-yellow-400/20">
                  <h4 className="font-bold mb-3 text-yellow-400">Let's Connect For Hiring</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Full-time opportunities</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Internship programs</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Freelance projects</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Technical collaborations</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Consultation work</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span>Team leadership roles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold mb-6 text-gray-300">Connect with me on</h4>
          <div className="flex justify-center gap-6">
            {/* Gmail/GitHub Icon */}
            <a
              href="mailto:ap6102951@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-900 hover:bg-yellow-400/10 
                       border border-gray-800 hover:border-yellow-400
                       transition-all duration-300 group relative"
              title="Send Email"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-gray-400 group-hover:text-yellow-400 font-bold">G</span>
              </div>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/ankita-paul-850497255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-900 hover:bg-yellow-400/10 
                       border border-gray-800 hover:border-yellow-400
                       transition-all duration-300 group relative"
              title="LinkedIn Profile"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-gray-400 group-hover:text-yellow-400 font-bold">L</span>
              </div>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Ankitapaul1234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-900 hover:bg-yellow-400/10 
                       border border-gray-800 hover:border-yellow-400
                       transition-all duration-300 group relative"
              title="GitHub Profile"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://x.com/78_ankita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-900 hover:bg-yellow-400/10 
                       border border-gray-800 hover:border-yellow-400
                       transition-all duration-300 group relative"
              title="Twitter Profile"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                </svg>
              </div>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-900 hover:bg-yellow-400/10 
                       border border-gray-800 hover:border-yellow-400
                       transition-all duration-300 group relative"
              title="Instagram Profile"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;