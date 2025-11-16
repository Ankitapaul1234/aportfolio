// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
// const Navbar = () => {
//   const [menu, openMenu] = useState(false);
//   const [showMenu, setShowmenu] = useState(true);
//   return (
//     <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
//       <span className="text-xl font-bold tracking-wide">Portfolio</span>

//       <ul
//         className={`${
//           menu ? "block" : "hidden"
//         }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
//       >
//         <a href="#About">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             About
//           </li>
//         </a>
//         <a href="#Experience">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Experience
//           </li>
//         </a>
//         <a href="#Projects">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Projects
//           </li>
//         </a>
//         <a href="#Footer">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Contact
//           </li>
//         </a>
//       </ul>
//       {showMenu ? (
//         <RiMenu2Line
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//           onClick={() => {
//             openMenu(!menu);
//             setShowmenu(!showMenu);
//           }}
//         />
//       ) : (
//         <RiCloseLine
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    // <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/20 text-white px-6 md:px-20 py-4 flex items-center justify-between shadow-md">
      <nav className="fixed top-0 left-0 w-full z-50 
                backdrop-blur bg-[#111827] text-white 
                px-6 md:px-20 py-4 flex items-center justify-between 
                shadow-md border-b border-gray-600">

      {/* Logo */}
       <a href="/">
        <span className="text-2xl font-bold tracking-wide hover:text-[#d4ac0d]">APortfolio</span>
        </a>

      {/* Nav Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex gap-6 text-center bg-black/60 md:bg-transparent md:static absolute top-full left-0 w-full md:w-auto rounded-b-xl px-6 py-4 md:p-0 font-semibold`}
      >
        <a href="#About">
          <li className="py-2 md:py-0 hover:text-[#d4ac0d] transition duration-300">About</li>
        </a>
        
        <a href="#Experience">
          <li className="py-2 md:py-0 hover:text-[#d4ac0d] transition duration-300">Skills</li>
        </a>
        <a href="#Projects">
          <li className="py-2 md:py-0 hover:text-[#d4ac0d] transition duration-300">Projects</li>
        </a>
        <a href="#contact">
          <li className="py-2 md:py-0 hover:text-[#d4ac0d] transition duration-300">Contact</li>
        </a>
       
      </ul>

      {/* Hamburger / Close Icon */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            onClick={() => setMenu(false)}
            className="cursor-pointer transition duration-300"
          />
        ) : (
          <RiMenu2Line
            size={30}
            onClick={() => setMenu(true)}
            className="cursor-pointer transition duration-300"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
