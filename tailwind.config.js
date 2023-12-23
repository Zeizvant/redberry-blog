/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-go': ['FiraGO', 'sans-serif'],
      },
      colors: {
        'button-background-main': '#5D37F3',
        'button-background-main-hover': '#512BE7',
        'button-background-main-active': '#4721DD',
        'navbar-border': '#E4E3EB',
      },
      padding: {
        76: '76px',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
