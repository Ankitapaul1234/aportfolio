// import React from "react";

// const Hobbies = () => {
//   const hobbies = [
//     {
//       icon: "🎨",
//       title: "Painting",
//       highlight: "Certified 6th Year",
//       description: "Expert in traditional & modern techniques",
//       color: "yellow",
//       link: "https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
//     },
//     {
//       icon: "🏃‍♀️",
//       title: "Skipping & Running",
//       highlight: "Competition Winner",
//       description: "Won prizes in school-level skipping & running competitions",
//       color: "green"
//     },
//     {
//       icon: "🎬",
//       title: "Movies",
//       highlight: "Film Enthusiast",
//       description: "Analyzes storytelling & cinematography",
//       color: "purple"
//     },
//     {
//       icon: "💻",
//       title: "New Technology",
//       highlight: "Tech Explorer",
//       description: "Passionate about AI & innovation",
//       color: "blue"
//     }
//   ];

//   const colorClasses = {
//     yellow: "border-yellow-400/30 hover:border-yellow-400/60 text-yellow-400",
//     green: "border-green-400/30 hover:border-green-400/60 text-green-400",
//     purple: "border-purple-400/30 hover:border-purple-400/60 text-purple-400",
//     blue: "border-blue-400/30 hover:border-blue-400/60 text-blue-400"
//   };

//   const colorGradients = {
//     yellow: "from-yellow-400/30 to-yellow-600/40",
//     green: "from-green-400/30 to-emerald-600/40",
//     purple: "from-purple-400/30 to-violet-600/40",
//     blue: "from-blue-400/30 to-cyan-600/40"
//   };

//   return (
//     <section id="hobbies" className="min-h-screen bg-black text-white py-16 px-4 md:px-8 relative overflow-hidden">
//       {/* Background Image with Reduced Opacity */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
//         style={{
//           backgroundImage: 'url("https://watercolormisfit.com/wp-content/uploads/2019/11/watercolor-brushes2.jpg")'
//         }}
//       >
//         {/* Reduced Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
//       </div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3">
//             My <span className="text-yellow-400">Hobbies</span>
//           </h2>
//           <p className="text-gray-200 max-w-xl mx-auto">
//             Creative activities and sports achievements that inspire me.
//           </p>
//         </div>

//         {/* Hobbies Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {hobbies.map((hobby, index) => (
//             <div 
//               key={index}
//               className={`group bg-black/20 backdrop-blur-sm p-5 rounded-xl border ${colorClasses[hobby.color]} 
//                         hover:scale-[1.03] transition-all duration-300`}
//             >
//               <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorGradients[hobby.color]} 
//                             flex items-center justify-center text-2xl mb-4 mx-auto`}>
//                 {hobby.icon}
//               </div>
//               <h3 className="text-lg font-bold text-center text-white mb-2">{hobby.title}</h3>
//               <p className="text-center text-sm mb-2 text-white">
//                 <span className="font-semibold">{hobby.highlight}</span>
//               </p>
//               <p className="text-gray-200 text-center text-xs">{hobby.description}</p>
              
//               {/* Instagram link for painting only */}
//               {hobby.link && (
//                 <div className="mt-3 text-center">
//                   <a 
//                     href={hobby.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-xs hover:underline text-yellow-300"
//                   >
//                     View Art Portfolio →
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Sports Achievement Details */}
//         <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-green-400/30 mb-8">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-600/40 
//                           flex items-center justify-center text-xl">
//               🏃‍♀️
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-green-400">Sports Achievements</h3>
//               <p className="text-gray-200 text-sm">Recognized for athletic performance</p>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="p-3 bg-green-400/10 rounded-lg">
//               <div className="flex items-center gap-2 mb-1">
//                 <span className="text-green-400">🏆</span>
//                 <h4 className="font-semibold text-white">Skipping Competition</h4>
//               </div>
//               <p className="text-gray-200 text-sm">
//                 Won 1st prize in school-level skipping competition • Demonstrated excellent endurance and rhythm
//               </p>
//             </div>
            
//             <div className="p-3 bg-green-400/10 rounded-lg">
//               <div className="flex items-center gap-2 mb-1">
//                 <span className="text-green-400">🥇</span>
//                 <h4 className="font-semibold text-white">Running Competition</h4>
//               </div>
//               <p className="text-gray-200 text-sm">
//                 Awarded prizes in school running competitions • Showcased speed, stamina, and determination
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Instagram Link */}
//         <div className="text-center mt-8">
//           <a 
//             href="https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-pink-600 to-rose-600 
//                      text-white rounded-full hover:from-pink-700 hover:to-rose-700 transition-all duration-300 text-sm"
//           >
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
//               <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
//             </svg>
//             Follow my art on Instagram
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hobbies;























// import React from "react";

// const Hobbies = () => {
//   const hobbies = [
//     {
//       icon: "🎨",
//       title: "Painting",
//       highlight: "6th Year Certified",
//       description: "Traditional & modern techniques",
//       color: "yellow",
//       link: "https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
//     },
//     {
//       icon: "🏃‍♀️",
//       title: "Sports",
//       highlight: "Competition Winner",
//       description: "Skipping & running prizes",
//       color: "green"
//     },
//     {
//       icon: "🎬",
//       title: "Movies",
//       highlight: "Film Enthusiast",
//       description: "Storytelling analysis",
//       color: "purple"
//     },
//     {
//       icon: "💻",
//       title: "New Tech",
//       highlight: "Tech Explorer",
//       description: "AI & innovation",
//       color: "blue"
//     }
//   ];

//   const colorClasses = {
//     yellow: "text-yellow-400 border-yellow-400/30",
//     green: "text-green-400 border-green-400/30",
//     purple: "text-purple-400 border-purple-400/30",
//     blue: "text-blue-400 border-blue-400/30"
//   };

//   return (
//     <section id="hobbies" className="py-12 px-4 md:px-8 text-white relative overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: 'url("https://watercolormisfit.com/wp-content/uploads/2019/11/watercolor-brushes2.jpg")'
//         }}
//       >
//         <div className="absolute inset-0 bg-black/70"></div>
//       </div>
      
//       <div className="max-w-4xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold mb-2">
//             My <span className="text-yellow-400">Hobbies</span>
//           </h2>
//           <p className="text-gray-300 text-sm">
//             Creative activities & competition achievements
//           </p>
//         </div>

//         {/* Hobbies Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//           {hobbies.map((hobby, index) => (
//             <div 
//               key={index}
//               className={`bg-black/40 backdrop-blur-sm p-3 rounded-lg border ${colorClasses[hobby.color]} 
//                         hover:scale-[1.02] transition-transform duration-300`}
//             >
//               <div className="text-2xl mb-2 text-center">{hobby.icon}</div>
//               <h3 className="text-sm font-bold text-center text-white mb-1">{hobby.title}</h3>
//               <p className={`text-xs text-center mb-1 ${colorClasses[hobby.color].split(' ')[0]}`}>
//                 {hobby.highlight}
//               </p>
//               <p className="text-xs text-center text-gray-300">{hobby.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Achievements */}
//         <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-yellow-400/30 mb-6">
//           <h3 className="text-base font-bold text-center text-yellow-400 mb-3">
//             Competition Achievements
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Drawing */}
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="text-yellow-400 text-lg">🎨</span>
//                 <h4 className="text-sm font-semibold text-white">Drawing</h4>
//               </div>
//               <ul className="space-y-1 pl-6">
//                 <li className="text-xs text-gray-300">• Won multiple drawing competitions</li>
//                 <li className="text-xs text-gray-300">• Recognized for creative skills</li>
//                 <li className="text-xs text-gray-300">• Technical proficiency in art</li>
//               </ul>
//             </div>

//             {/* Sports */}
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="text-green-400 text-lg">🏅</span>
//                 <h4 className="text-sm font-semibold text-white">Sports</h4>
//               </div>
//               <ul className="space-y-1 pl-6">
//                 <li className="text-xs text-gray-300">• 1st prize in skipping competition</li>
//                 <li className="text-xs text-gray-300">• Awards in running competitions</li>
//                 <li className="text-xs text-gray-300">• Demonstrated endurance</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Instagram Link */}
//         <div className="text-center">
//           <a 
//             href="https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 
//                      text-white rounded-full hover:from-pink-700 hover:to-rose-700 transition-all duration-300 text-xs"
//           >
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
//               <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
//             </svg>
//             View Art on Instagram
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hobbies;





















import React from "react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: "🎨",
      title: "Painting",
      highlight: "6th Year Certified",
      description: "Traditional & modern techniques",
      color: "yellow",
      link: "https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
    },
    {
      icon: "🏃‍♀️",
      title: "Sports",
      highlight: "Competition Winner",
      description: "Skipping & running",
      color: "green"
    },
    {
      icon: "🎬",
      title: "Movies",
      highlight: "Film Enthusiast",
      description: "Storytelling analysis",
      color: "purple"
    },
    {
      icon: "💻",
      title: "New Tech",
      highlight: "Tech Explorer",
      description: "AI & innovation",
      color: "blue"
    }
  ];

  const colorClasses = {
    yellow: "text-yellow-400 border-yellow-400/30",
    green: "text-green-400 border-green-400/30",
    purple: "text-purple-400 border-purple-400/30",
    blue: "text-blue-400 border-blue-400/30"
  };

  return (
    <section id="hobbies" className="py-12 px-4 md:px-8 text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://watercolormisfit.com/wp-content/uploads/2019/11/watercolor-brushes2.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            My <span className="text-yellow-400">Hobbies</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Creative activities & competition achievements
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className={`bg-black/40 backdrop-blur-sm p-3 rounded-lg border ${colorClasses[hobby.color]} 
                        hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-2xl mb-2 text-center">{hobby.icon}</div>
              <h3 className="text-sm font-bold text-center text-white mb-1">{hobby.title}</h3>
              <p className={`text-xs text-center mb-1 ${colorClasses[hobby.color].split(' ')[0]}`}>
                {hobby.highlight}
              </p>
              <p className="text-xs text-center text-gray-300">{hobby.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-yellow-400/30 mb-6">
          <h3 className="text-base font-bold text-center text-yellow-400 mb-4">
            How My Achievements Translate to Work
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Drawing */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <span className="text-yellow-400 text-lg">🎨</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Drawing Achievements</h4>
                  <p className="text-xs text-gray-300">Won multiple drawing competitions</p>
                </div>
              </div>
              <div className="pl-12">
                <p className="text-xs text-gray-300">
                  <span className="text-yellow-400">→</span> Enhances my <span className="text-yellow-400 font-semibold">UI/UX design skills</span>, attention to detail, and creative problem-solving in frontend development.
                </p>
              </div>
            </div>

            {/* Sports */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                  <span className="text-green-400 text-lg">🏅</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sports Achievements</h4>
                  <p className="text-xs text-gray-300">1st prize in skipping • Awards in running</p>
                </div>
              </div>
              <div className="pl-12">
                <p className="text-xs text-gray-300">
                  <span className="text-green-400">→</span> Demonstrates <span className="text-green-400 font-semibold">dedication, discipline, and perseverance</span>—qualities essential for project completion and teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Link */}
        <div className="text-center">
          <a 
            href="https://www.instagram.com/artfulaura88?igsh=MWVyOXl1czBpMWUwaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 
                     text-white rounded-full hover:from-pink-700 hover:to-rose-700 transition-all duration-300 text-xs"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            View Art on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;