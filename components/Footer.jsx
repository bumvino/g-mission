/* Import modern bilingual-friendly font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

/* Tailwind base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global body styling */
body {
@apply bg-white text-gray-800 font-sans;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.6;
    scroll-behavior: smooth;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
@apply font-bold text-gray-900;
    font-family: 'Noto Sans KR', sans-serif;
}

/* Links */
a {
@apply text-blue-600 transition-colors duration-150;
}
a:hover {
@apply text-blue-800 underline;
}

/* Section spacing */
section {
@apply py-16 px-4;
}

/* Divider */
.divider {
@apply border-t border-gray-300 my-6 w-16 mx-auto;
}

/* Responsive container */
.container {
@apply max-w-5xl mx-auto;
}

/* Footer style override (if needed) */
footer {
@apply text-center text-sm text-gray-500;
}

/* Button (optional if you plan to add buttons later) */
.button {
@apply bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition;
}