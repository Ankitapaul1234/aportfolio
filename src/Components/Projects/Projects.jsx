// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white ">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-5">
//         <ProjectCard
//           title="Breast cancer prediction website : Predica"
//           main="Features: AI-powered accurate diagnosis, an interactive support chatbot, precautionary tips and videos, and a hospital locator for nearby cancer treatment centers."
//         />
//         <ProjectCard
//           title="Ai carear coach: TufAi"
//           main="AI-powered personalized career guidance with tools like a resume builder, interview preparation assistant, cover letter generator and industry insights."
//         />
//         <ProjectCard
//           title="Acclivity"
//           main="Features: Secure authentication, robust validation, and Dwolla-integrated fund transfers supporting multi-bank, ID-based transactions."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;












// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//       <h1 className="text-2xl md:text-4xl font-bold mb-6">Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-8 justify-center">
//         <ProjectCard
//           title="Breast cancer prediction website : Predica"
//           main="Features: Accurate diagnosis using AI, an interactive chatbot for support, tips and videos for precaution and a hospital locator for nearby cancer treatment centers."
//           demoLink="https://predica.netlify.app/"
//           sourceLink="https://github.com/Ankitapaul1234/predica"
//           image="https://via.placeholder.com/400x250?text=Predica"
//         />
//         <ProjectCard
//           title="AI career coach: TufAi"
//           main="AI-powered personalized career guidance, resume builder, interview preparation, and cover letter generator."
//           demoLink="https://tufai.vercel.app/"
//           sourceLink="https://github.com/Ankitapaul1234/tufai"
//         />
//         <ProjectCard
//           title="Acclivity"
//           main="Features: Secure authentication, robust validation and a Dwolla-integrated fund transfer module supporting multiple bank ID-based transactions."
//           demoLink="https://acclivity89.vercel.app/"
//           sourceLink="https://github.com/Ankitapaul1234/acclivity89"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;













import React from "react";
import ProjectCard from "./ProjectCard";
import predicaImg from "../../assets/predica.png";
import tufaiImg from "../../assets/tufai.png";
import acclivityImg from "../../assets/bank.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-10">
        <ProjectCard
          title="Predica: Breast Cancer Prediction"
          main="Features: Accurate diagnosis using AI, interactive chatbot, educational videos, and a hospital locator."
          image={predicaImg}
          demoLink="https://predica.netlify.app/"
          sourceLink="https://github.com/Ankitapaul1234/predica"
        />
        <ProjectCard
          title="TufAi: AI Career Coach"
          main="Features: AI-powered personalized career guidance, resume builder, cover letter generator, and interview prep."
          image={tufaiImg}
          demoLink="https://tufai.vercel.app/"
          sourceLink="https://github.com/Ankitapaul1234/tufai"
        />
        <ProjectCard
          title="Acclivity: Bank Transfer App"
          main="Features: Secure login, form validation, and Dwolla-integrated fund transfer supporting multi-bank ID-based transactions."
          image={acclivityImg}
          demoLink="https://acclivity89.vercel.app/"
          sourceLink="https://github.com/Ankitapaul1234/acclivity89"
        />
      </div>
    </div>
  );
};

export default Projects;
