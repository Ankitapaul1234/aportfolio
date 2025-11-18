// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     >
//       <div>
//         <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free To reach out!
//         </h3>
//       </div>

//       <ul className="text-sm md:text-xl">
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail size={20} />
//           myemail@gmail.com
//         </li>
//         <li className="flex gap-1 items-center">
//           <CiLinkedin />
//           linkdlin.com/username
//         </li>
//         <li className="flex gap-1 items-center">
//           <FaGithub />
//           github.com/username
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;












import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-8"
    >
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg flex flex-col gap-3">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={20} />
          <a
            href="ap6102951@gmail.com"
            className="hover:underline"
          >
           ap6102951@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-2">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/ankita-paul-850497255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/ankita-paul-850497255
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/Ankitapaul1234"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Ankitapaul1234
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaXTwitter size={20} />
          <a
            href="https://x.com/78_ankita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://x.com/78_ankita
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
