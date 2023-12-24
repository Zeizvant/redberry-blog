/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-go': ['FiraGO', 'sans-serif'],
      },
      fontSize: {
        64: '64px',
      },
      colors: {
        'button-background-main': '#5D37F3',
        'button-background-main-hover': '#512BE7',
        'button-background-main-active': '#4721DD',
        'navbar-border': '#E4E3EB',
        'main-text': '#1A1A1F',
        'main-background': '#F3F2FA',
        'blog-p': '#1A1A1F',
        'gray-date': '#85858D',
        'blog-paragraph': '#404049',
        'more-button': '#5D37F3',
        'input-bg': '#F7F7FF',
        'error-text-color': '#EA1919',
        'error-inout-background': '#FAF2F3',
      },
      padding: {
        '07': '7px',
        15: '15px',
        76: '76px',
      },
      width: {
        408: '408px',
        480: '480px',
        684: '684px',
      },
      height: {
        300: '300px',
        328: '328px',
        272: '272px',
      },
      spacing: {
        200: '200px',
      },
      maxWidth: {
        1440: '1440px',
      },
      borderWidth: {
        1: '1px',
        1.5: '1.5px',
      },
      borderRadius: {
        30: '30px',
      },
      backgroundImage: {
        'main-bg': 'url(/src/assets/main-background.png)',
      },
    },
  },
  plugins: [],
};
