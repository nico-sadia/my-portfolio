/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mono: ["var(--font-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
