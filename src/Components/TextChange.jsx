// import React from "react";
// import { useState, useEffect } from "react";
// const TextChange = () => {
//   // const texts = ["Hi, I'm Ankita Paul", "Hi, I'm Web Developer", "Hi, I'm Web Developer"];
//   const texts = ["Hi, I'm Ankita Paul", "I'm a Web Developer", "I love building websites"];
//   const [currenText, setCurrentText] = useState("");
//   const [endValue, setendValue] = useState(true);
//   const [isForward, setIsForward] = useState(true);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText(texts[index].substring(0, endValue));
//       if (isForward) {
//         setendValue((prev) => prev + 1);
//       } else {
//         setendValue((prev) => prev - 1);
//       }
//       if (endValue > texts[index].length + 10) {
//         setIsForward(false);
//       }
//       if (endValue < 2.1) {
//         setIsForward(true);
//         setIndex((prev) => prev & texts.length);
//       }
//     }, 50);

//     return () => clearInterval(intervalId);
//   }, [endValue, isForward, index, texts]);

//   return <div className="transition ease duration-300">{currenText}</div>;
// };

// export default TextChange;





// import React, { useState, useEffect } from "react";

// const TextChange = () => {
//   const texts = ["Hello, I'm Ankita Paul", "Hello, I'm Web Developer", "Hello, I'm ml enthusiast"];
//   const [currentText, setCurrentText] = useState("");
//   const [charIndex, setCharIndex] = useState(0);
//   const [isForward, setIsForward] = useState(true);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const fullText = texts[textIndex];

//       if (isForward) {
//         if (charIndex < fullText.length) {
//           setCharIndex((prev) => prev + 1);
//           setCurrentText(fullText.substring(0, charIndex + 1));
//         } else {
//           setTimeout(() => setIsForward(false), 1000);
//         }
//       } else {
//         if (charIndex > 0) {
//           setCharIndex((prev) => prev - 1);
//           setCurrentText(fullText.substring(0, charIndex - 1));
//         } else {
//           setIsForward(true);
//           setTextIndex((prev) => (prev + 1) % texts.length);
//         }
//       }
//     }, 100);

//     return () => clearInterval(intervalId);
//   }, [charIndex, isForward, textIndex, texts]);

//   return (
//     <div className="transition ease duration-300 text-white text-center mt-6 px-4">
//       <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//         {currentText}
//         <span className="animate-pulse">|</span>
//       </h1>
//     </div>
//   );
// };

// export default TextChange;





import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Ankita Paul", "Web Developer", "ML Enthusiast"]; // Only the dynamic part
  const staticPrefix = "Hello, I'm "; // Static white text

  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[textIndex];

      if (isForward) {
        if (charIndex < fullText.length) {
          setCharIndex((prev) => prev + 1);
          setCurrentText(fullText.substring(0, charIndex + 1));
        } else {
          setTimeout(() => setIsForward(false), 1000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setCurrentText(fullText.substring(0, charIndex - 1));
        } else {
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [charIndex, isForward, textIndex, texts]);

  return (
    <div className="transition ease duration-300 text-center mt-6 px-4">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
        {staticPrefix}
        <span className="text-yellow-400">{currentText}</span>
        <span className="animate-pulse text-white">|</span>
      </h1>
    </div>
  );
};

export default TextChange;

