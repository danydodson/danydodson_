import tw, { css, theme } from 'twin.macro'

const themeBase = css`
  :root {
    --nav-height: 90px;
    --nav-height-scrolling: 60px;
    --ease: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --text-tertiary: #8a1d1d;
  }

  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --text-tertiary: #8a1d1d;
    --text-quaternary: #4d4d4d;
  }

  body {
    ${tw`bg-primary text-primary antialiased`};
    ${tw`transition-all duration-200`};
    --webkit-tap-highlight-color: ${theme`colors.purple.500`};
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    ${tw`w-full h-full`}
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .fadeIn {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  .fadeInSlow {
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }

`

export default themeBase
