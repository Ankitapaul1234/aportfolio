// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//       },
//       animation: {
//         float: 'float 3s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200% 0' },
//           '100%': { backgroundPosition: '200% 0' },
//         },
//       },
//       animation: {
//         float: 'float 3s ease-in-out infinite',
//         shimmer: 'shimmer 4s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200% 0' },
//           '100%': { backgroundPosition: '200% 0' },
//         },
//         glow: {
//           '0%': {
//             boxShadow: '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff',
//           },
//           '50%': {
//             boxShadow: '0 0 8px #66ccff, 0 0 15px #66ccff, 0 0 24px #66ccff',
//           },
//           '100%': {
//             boxShadow: '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff',
//           },
//         },
//       },
//       animation: {
//         float: 'float 3s ease-in-out infinite',
//         shimmer: 'shimmer 4s linear infinite',
//         glow: 'glow 2s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };









// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200% 0' },
//           '100%': { backgroundPosition: '200% 0' },
//         },
//         glow: {
//           '0%, 100%': {
//             boxShadow: '0 0 3px #b3d9ff, 0 0 6px #b3d9ff, 0 0 10px #b3d9ff',
//           },
//           '50%': {
//             boxShadow: '0 0 5px #66ccff, 0 0 10px #66ccff, 0 0 15px #66ccff',
//           },
//         },
//       },
//       animation: {
//         float: 'float 3s ease-in-out infinite',
//         shimmer: 'shimmer 4s linear infinite',
//         glow: 'glow 3s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// };













/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #b3d9ff, 0 0 20px #b3d9ff',
          },
          '50%': {
            boxShadow: '0 0 15px #06b6d4, 0 0 30px #06b6d4',
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
