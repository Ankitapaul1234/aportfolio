// import About from "./Components/About/About";
// import Experience from "./Components/Experience/Experience";
// import Footer from "./Components/Footer/Footer";
// import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
// import Projects from "./Components/Projects/Projects";
// import Contact from "./Components/Contact/Contact";

// function App() {
//   return (
//     <div className="bg-[#0a0a0a] h-auto w-full overflow-hidden">
//       <Navbar />
//       <Home />
//       <About />
//       <Experience />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;











import { useEffect } from "react";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
// import Hobbies from "./Components/Hobbies/hobbie";
import Hobbies from "./Components/Hobbies/hobbie";

function App() {

  // Custom Cursor Script
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    const moveCursor = (e) => {
      dot.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;

      outline.style.top = `${e.clientY}px`;
      outline.style.left = `${e.clientX}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="bg-[#0a0a0a] h-auto w-full overflow-hidden">

      {/* Custom Cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
       <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
