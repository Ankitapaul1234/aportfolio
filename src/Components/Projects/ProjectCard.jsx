// import React from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";
// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4" src={bannerImg} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Demo
//         </button>
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Source Code
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;






// import React from "react";
// import { motion } from "framer-motion";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <motion.div
//       className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl cursor-pointer"
//       initial={{ opacity: 0, scale: 0.8, y: 50 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.03 }}
//       viewport={{ once: true }}
//     >
//       <div className="overflow-hidden rounded-xl">
//         <motion.img
//           src={bannerImg}
//           alt=""
//           className="p-4 w-full h-auto object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <motion.button
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           whileTap={{ scale: 0.95 }}
//         >
//           Live
//         </motion.button>
//         <motion.button
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           whileTap={{ scale: 0.95 }}
//         >
//           Source Code
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;












// import React from "react";
// import { motion } from "framer-motion";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <motion.div
//       className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl rounded-2xl cursor-pointer animate-glow"
//       initial={{ opacity: 0, scale: 0.8, y: 50 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.03 }}
//       viewport={{ once: true }}
//     >
//       <div className="overflow-hidden rounded-xl">
//         <motion.img
//           src={bannerImg}
//           alt=""
//           className="p-4 w-full h-auto object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <motion.button
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           whileTap={{ scale: 0.95 }}
//         >
//           Demo
//         </motion.button>
//         <motion.button
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           whileTap={{ scale: 0.95 }}
//         >
//           Source Code
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;












// import React from "react";
// import { motion } from "framer-motion";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <motion.div
//       className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl rounded-2xl cursor-pointer animate-glow"
//       initial={{ opacity: 0, scale: 0.8, y: 50 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.03 }}
//       viewport={{ once: true }}
//     >
//       <div className="overflow-hidden rounded-xl">
//         <motion.img
//           src={bannerImg}
//           alt=""
//           className="p-4 w-full h-auto object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <motion.button
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           whileTap={{ scale: 0.95 }}
//         >
//           Demo
//         </motion.button>
//         <motion.button
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//           whileTap={{ scale: 0.95 }}
//         >
//           Source Code
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;













// import React from "react";
// import { motion } from "framer-motion";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";

// const ProjectCard = ({ title, main, demoLink, sourceLink }) => {
//   return (
//     <motion.div
//       className="p-3 md:p-6 flex flex-col w-96 bg-[#0c0e19] shadow-xl rounded-2xl cursor-pointer animate-glow"
//       initial={{ opacity: 0, scale: 0.8, y: 50 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.03 }}
//       viewport={{ once: true }}
//     >
//       <div className="overflow-hidden rounded-xl">
//         <motion.img
//           src={bannerImg}
//           alt=""
//           className="p-4 w-full h-auto object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <motion.a
//           href={demoLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
//           whileTap={{ scale: 0.95 }}
//         >
//           Demo
//         </motion.a>
//         <motion.a
//           href={sourceLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
//           whileTap={{ scale: 0.95 }}
//         >
//           Source Code
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;















// import React from "react";
// import { motion } from "framer-motion";

// const ProjectCard = ({ title, main, demoLink, sourceLink, image }) => {
//   return (
//     <motion.div
//       className="p-3 md:p-6 flex flex-col w-96 bg-[#0c0e19] shadow-xl rounded-2xl cursor-pointer animate-glow"
//       initial={{ opacity: 0, scale: 0.8, y: 50 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.03 }}
//       viewport={{ once: true }}
//     >
//       <div className="overflow-hidden rounded-xl">
//         <motion.img
//           src={image}
//           alt={title}
//           className="p-4 w-full h-auto object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <motion.a
//           href={demoLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
//           whileTap={{ scale: 0.95 }}
//         >
//           Demo
//         </motion.a>
//         <motion.a
//           href={sourceLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
//           whileTap={{ scale: 0.95 }}
//         >
//           Source Code
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

















// import React from "react";
// import { motion } from "framer-motion";

// const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
//   return (
//     <motion.div
//       className="p-3 md:p-6 flex flex-col w-[22rem] bg-[#0c0e19] shadow-xl rounded-2xl cursor-pointer animate-glow"
//       initial={{ opacity: 0, scale: 0.8, y: 50 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       whileHover={{ scale: 1.03 }}
//       viewport={{ once: true }}
//     >
//       <div className="overflow-hidden rounded-xl">
//         <motion.img
//           src={image}
//           alt={title}
//           className="p-4 w-full h-48 object-cover rounded-xl"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//         />
//       </div>

//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white mt-2">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">{main}</p>

//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <motion.a
//           href={demoLink}
//           target="_blank"
//           rel="noopener noreferrer"
//             className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl  bg-cyan-500"  
//            whileTap={{ scale: 0.95 }}
//         >
//           Live
//         </motion.a>
//         <motion.a
//           href={sourceLink}
//           target="_blank"
//           rel="noopener noreferrer"
//            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-cyan-500"  
//           whileTap={{ scale: 0.95 }}
//         >
//           Source Code
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;












import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <motion.div
      className="p-3 md:p-6 flex flex-col w-[22rem] bg-[#0c0e19] shadow-xl rounded-2xl cursor-pointer animate-glow"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-xl">
        <motion.img
          src={image}
          alt={title}
          className="p-4 w-full h-48 object-cover rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white mt-2">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">

        {/* Live Button */}
        <motion.a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-white py-2 px-6 w-40 md:w-48
                     text-sm md:text-lg font-semibold rounded-3xl
                     bg-[#d4ac0d] border-2 border-white
                     shadow-lg transition-all duration-300 ease-in-out
                     hover:bg-white hover:text-[#d4ac0d] hover:scale-105 hover:shadow-yellow-500/50"
          whileTap={{ scale: 0.95 }}
        >
          Live
        </motion.a>

        {/* Source Code Button */}
        <motion.a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-white py-2 px-6 w-40 md:w-48
                     text-sm md:text-lg font-semibold rounded-3xl
                     bg-[#d4ac0d] border-2 border-white
                     shadow-lg transition-all duration-300 ease-in-out
                     hover:bg-white hover:text-[#d4ac0d] hover:scale-105 hover:shadow-yellow-500/50"
          whileTap={{ scale: 0.95 }}
        >
          Source Code
        </motion.a>

      </div>
    </motion.div>
  );
};

export default ProjectCard;

