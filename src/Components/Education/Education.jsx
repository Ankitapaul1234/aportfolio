
import { useState } from "react";

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="education"
      className="relative py-20 px-6 md:px-20 text-white"
      style={{
        backgroundImage:
          "url('https://i1.pickpik.com/photos/916/460/15/dark-gloomy-books-pages-thumb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        {/* <h2 className="text-center text-4xl font-bold mb-12">
          <span className="text-yellow-400">My</span> Qualification
        </h2> */}
        {/* Heading */}
<h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
  <span className="text-yellow-400">My</span>{" "}
  {activeTab === "education"
    ? "Education"
    : activeTab === "certificates"
    ? "Certificates"
    : "Experience"}
</h2>


        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-6 mb-14">
          {["education", "certificates", "experience"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full border-2 border-yellow-400 font-medium transition-all duration-300 capitalize
                ${
                  activeTab === tab
                    ? "bg-yellow-400 text-black"
                    : "text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {/* Education */}
          {activeTab === "education" && (
            <div className="flex flex-col gap-8 animate-fadeIn">
              {[
                [
                  "Information Technology",
                  "Narula Institute of Technology",
                  "CGPA: 9.0",
                  "2022 – 2026",
                ],
                [
                  "XII (WBCHSE)",
                  "Dum Dum Baidyanath Institution for Girls (H.S)",
                  "Percentage: 80.4%",
                  "2022",
                ],
                [
                  "X (WBBSE)",
                  "Dum Dum Baidyanath Institution for Girls (H.S)",
                  "Percentage: 81%",
                  "2020",
                ],
              ].map(([title, inst, score, year], i) => (
                <div
                  key={i}
                  className="bg-black/65 border-l-4 border-yellow-400 p-6 rounded-xl shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-yellow-400">
                    {title}
                  </h3>
                  <p className="text-gray-300">{inst}</p>
                  <p className="mt-1 font-medium text-gray-200">{score}</p>
                  <p className="text-sm text-gray-400">{year}</p>
                </div>
              ))}
            </div>
          )}

          {/* Certificates */}
          {activeTab === "certificates" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {[
                [
                  "Certified Java Programming",
                  "Udemy",
                  "https://www.udemy.com/certificate/UC-f4b1cf63-12a8-4b1b-b62f-118c42110565/",
                ],
                [
                  "Web Development (HTML, CSS, JS)",
                  "Coursera",
                  "https://www.coursera.org/account/accomplishments/certificate/94YK938BAQ3C",
                ],
                [
                  "Front-End Apps with React",
                  "Coursera",
                  "https://www.coursera.org/account/accomplishments/verify/ZJRLR3M35VFG",
                ],
                [
                  "Git & GitHub",
                  "Coursera",
                  "https://www.coursera.org/account/accomplishments/certificate/8K8JBLE4GZ4C",
                ],
                [
                  "Programming in Modern C++",
                  "NPTEL (Elite + Silver)",
                  "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs125/Course/NPTEL24CS125S95230010503925732.pdf",
                ],
              ].map(([title, platform, link], index) => (
                <div
                  key={index}
                  className="bg-black/65 p-6 rounded-2xl border border-yellow-400/30
                             hover:-translate-y-2 hover:shadow-yellow-400/30
                             transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-yellow-400 mb-1">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4">{platform}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold hover:opacity-90"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {activeTab === "experience" && (
            <div className="flex flex-col gap-8 animate-fadeIn">
              {/* Internship */}
              <div className="bg-black/65 border-l-4 border-yellow-400 p-6 rounded-xl shadow-xl">
                <h3 className="text-xl font-semibold text-yellow-400">
                  Frontend Development Intern
                </h3>
                <p className="text-gray-300">
                  Prodigy Infotech | Apr 2024 – May 2024
                </p>

                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-200">
                  <li>
                    Developed a responsive clothing brand landing page{" "}
                    <span className="text-yellow-400 font-medium">
                      “Trendsy”
                    </span>{" "}
                    using HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Built a sleek, responsive stopwatch application{" "}
                    <span className="text-yellow-400 font-medium">
                      “Stopzy”
                    </span>{" "}
                    using HTML, CSS, and JavaScript.
                  </li>
                </ul>
              </div>

              {/* Hackathon */}
              <div className="bg-black/65 border-l-4 border-yellow-400 p-6 rounded-xl shadow-xl">
                <h3 className="text-xl font-semibold text-yellow-400">
                  Hackathon Participation
                </h3>
                <p className="text-gray-300">
                  SIH | 2nd Year
                </p>

                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-200">
                  <li> Participated in{" "}
  <span className="text-yellow-400 font-medium">
    Smart India Hackathon (SIH)
  </span></li>
                  <li>
                    Selected in the{" "}
                    <span className="text-yellow-400 font-medium">
                      Internal Hackathon
                    </span>{" "}
                    round for innovative problem-solving.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;


















