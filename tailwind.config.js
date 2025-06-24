const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                "metron": ["Metron", ...defaultTheme.fontFamily.mono]
            }
        },
    },
    plugins: [],
};
