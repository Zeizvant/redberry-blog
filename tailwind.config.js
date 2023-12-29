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
        'main-text': '#1A1A1F',
        'main-background': '#F3F2FA',
        'blog-p': '#1A1A1F',
        'gray-date': '#85858D',
        'blog-paragraph': '#404049',
        'more-button': '#5D37F3',
        'input-bg': '#F7F7FF',
        'error-text-color': '#EA1919',
        'error-inout-background': '#FAF2F3',
        'file-upload': '#F4F3FF',
      },
      boxShadow: {
        modal: '2px 4px 8px 0 rgba(0, 0, 0, 0.08)',
      },
      padding: {
        '07': '7px',
        15: '15px',
        76: '76px',
      },
      margin: {
        '16vw': '16vw',
        '33vw': '33vw',
      },
      width: {
        225: '225px',
        288: '288px',
        408: '408px',
        480: '480px',
        600: '600px',
        684: '684px',
        720: '720px',
      },
      height: {
        124: '124px',
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
      fontSize: {
        32: '32px',
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
      gap: {
        '16vw': '16.6vw',
      },
      gridAutoColumns: {
        '2fr': 'minmax(0, 408px)',
      },
    },
  },
  plugins: [],
};
