// import React from "react";
// import AboutImg from "../../assets/7358653-removebg-preview.png";
// import { IoArrowForward } from "react-icons/io5";
// const About = () => {
//   return (
//     <div
//       id="About"
//       className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
//     >
//       <div>
//         <h2 className="text-2xl md:text-4xl font-bold">About</h2>
//         <div className="md:flex flex-wrap flex-col md:flex-row items-center">
//           <img className="md:h-80" src={AboutImg} alt="About img" />

//           <ul>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Frontend developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Maiores explicabo deserunt asperiores quasi, vitae blanditiis
//                   perferendis quos consectetur ea harum! Libero aut qui
//                   similique recusandae provident consectetur sed itaque alias
//                   sint ipsa?
//                 </p>
//               </span>
//             </div>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Database developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Maiores
//                 </p>
//               </span>
//             </div>
//             <div className="flex gap-3 py-4">
//               <IoArrowForward size={30} className="mt-1" />

//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Backend developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Maiores explicabo deserunt asperiores quasi, vitae blanditiis
//                   perferendis
//                 </p>
//               </span>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


















import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#111827] shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-90" src={AboutImg} alt="About img" />
          {/* Animated Image */}
        

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Final-Year B.Tech Student
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Currently pursuing a Bachelor of Technology in Information Technology, with a focus on combining core engineering fundamentals with real-world applications in software development and artificial intelligence.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend & Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Passionate about building responsive, user-centric web apps using modern frameworks like React, Node.js, and Express.js with MongoDB/MySQL.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Machine Learning Enthusiast
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Enthusiastically exploring and implementing ML models using Python, TensorFlow, and scikit-learn to create intelligent, data-driven applications.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Problem Solver & Innovator
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Dedicated to solving real-world challenges through technology by blending software engineering skills with AI innovation.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Constant Learner
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Continuously expanding knowledge at the intersection of web development and machine learning to stay ahead in the evolving tech landscape.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

