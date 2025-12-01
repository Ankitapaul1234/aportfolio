// import React from "react";
// import avatarImg from "../../assets/7358602-removebg-preview.png";
// import TextChange from "../TextChange";

// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//       <div className="md:w-2/4 md:pt-10 ">
//         <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight ">
//           Welcome to my portfolio! Take a look at my work — let's build something awesome together.
//         </p>
//         <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Contact Me
//         </button>
//       </div>
 
      
 
// {/* <img
//   src={avatarImg}
//   alt="Ankita Paul"
//   className="md:flex flex-wrap flex-col md:flex-row items-center  sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl animate-float mx-auto"
// /> */}
// <div className="md:w-2/4 flex justify-center md:justify-end mt-10 md:mt-0">
//     <img
//       src={avatarImg}
//       alt="Ankita Paul"
//       className="block mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl animate-float"
//     />
//   </div>



//     </div>
//   );
// };

// export default Home;






import React from "react";
//import avatarImg from "../../assets/7358602-removebg-preview.png";
import avatarImg from "../../assets/myphoto.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">

{/* Half-circle arc stack on left */}
{/* <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 z-0">
  <svg width="300" height="300" viewBox="0 0 300 300">
    <path d="M150 20 A130 130 0 0 1 150 280" stroke="#9CA3AF" strokeWidth="6" fill="none" />
    <path d="M150 40 A110 110 0 0 1 150 260" stroke="#B0B6BD" strokeWidth="5" fill="none" />
    <path d="M150 60 A90 90 0 0 1 150 240" stroke="#C5C9CE" strokeWidth="4" fill="none" />
    <path d="M150 80 A70 70 0 0 1 150 220" stroke="#D1D5DB" strokeWidth="4" fill="none" />
  </svg>
</div> */}

 {/* Half-circle arc stack on the left, responsive */}
<div className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none opacity-40 z-0">
  <svg
    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M150 20 A130 130 0 0 1 150 280" stroke="#9CA3AF" strokeWidth="6" fill="none" />
    <path d="M150 40 A110 110 0 0 1 150 260" stroke="#B0B6BD" strokeWidth="5" fill="none" />
    <path d="M150 60 A90 90 0 0 1 150 240" stroke="#C5C9CE" strokeWidth="4" fill="none" />
    <path d="M150 80 A70 70 0 0 1 150 220" stroke="#D1D5DB" strokeWidth="4" fill="none" />
  </svg>
</div>











{/* 
<div className="absolute top-10 left-10 w-56 h-56 bg-yellow-400 opacity-30 blur-2xl rounded-full mix-blend-screen"></div>

<div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500 opacity-40 blur-3xl rounded-full mix-blend-screen"></div> */}
<div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 opacity-45 blur-2xl rounded-full mix-blend-screen"></div>

<div className="absolute bottom-16 right-10 w-96 h-96 bg-yellow-500 opacity-50 blur-3xl rounded-full mix-blend-screen"></div>



      {/* Left content */}
   

      <div className="md:w-2/4 md:pt-10">
       <p className="text-[#d4ac0d] font-light text-xl tracking-wide"
   style={{ fontFamily: "Inter, sans-serif" }}>
  -- Hello World
</p>

        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter mb-4">
          <TextChange />
        </h1>
        {/* <p className="text-sm md:text-2xl tracking-tight mb-6">
          Welcome to my portfolio! Take a look at my work — let's build something awesome together.
        </p> */}

       {/* <p className="text-sm md:text-2xl tracking-tight mb-6 
               text-gray-300 font-light leading-relaxed">
  Welcome to my portfolio! Take a look at my work — let's build something awesome together.
</p> */}
       <p className="text-sm md:text-2xl tracking-tight mb-6 
               text-gray-300 font-light leading-relaxed"
   style={{ fontFamily: "'Dancing Script', cursive" }}>
  Welcome to my portfolio! Take a look at my work — let's build something awesome together.
</p>


        {/* <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#2a79e6]">
          Contact Me
        </button> */}
        
        
        
        {/* <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-6 font-semibold rounded-3xl bg-[#2a79e6] shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300 ease-in-out">
  Contact Me
</button> */}
{/* <a href="#contact">
  <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-6 font-semibold rounded-3xl bg-[#2a79e6] shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300 ease-in-out">
    Contact Me
  </button>
</a> */}

 <a href="#contact">
   <button
     className="mt-5 text-white py-2 px-6 w-40 md:w-48
                text-sm md:text-lg font-semibold rounded-3xl
                bg-[#d4ac0d] border-2 border-white
                shadow-lg transition-all duration-300 ease-in-out
                hover:bg-white hover:text-[#d4ac0d] hover:scale-105 hover:shadow-yellow-500/50"
   >
     Contact Me
         </button>
 </a> 








      </div>

      {/* Right image */}
       {/* <div className="md:w-2/4 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src={avatarImg}
          alt="Ankita Paul"
          className="block mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl animate-float"
        /> 
       </div>   */}

 <div className="md:w-2/4 flex justify-center md:justify-end mt-10 md:mt-0">
  <img
    src={avatarImg}
    alt="Ankita Paul"
    className="block mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl animate-float rounded-full object-cover"
  />
</div>






      
    </div>
  );
};

export default Home;










