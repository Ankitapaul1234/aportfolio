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
    


      {/* Left content */}
   

      <div className="md:w-2/4 md:pt-10">
       <p className="text-cyan-400 font-light text-xl tracking-wide"
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

// <a href="#contact">
//   <button
//     className="mt-5 text-white py-2 px-6 w-40 md:w-48
//                text-sm md:text-lg font-semibold rounded-3xl
//                bg-[#d4ac0d] border-2 border-white
//                shadow-lg transition-all duration-300 ease-in-out
//                hover:bg-white hover:text-[#d4ac0d] hover:scale-105 hover:shadow-yellow-500/50"
//   >
//     Contact Me
//   </button>
// </a>

<a href="#contact">
  <button
    className="mt-5 text-white py-2 px-6 w-40 md:w-48
               text-sm md:text-lg font-semibold rounded-3xl
               bg-cyan-300 border-2 border-white
               shadow-lg transition-all duration-300 ease-in-out
               hover:bg-white hover:text-cyan-500 hover:scale-105 
               hover:shadow-cyan-300/50"
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
