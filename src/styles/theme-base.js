import tw, { css, theme } from 'twin.macro'
import fonts from './fonts'

const themeBase = css`
  ${fonts}

  :root {
    --ease: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #475569;
    --bg-tertiary: #f1f5f9;
    
    --text-primary: #475569;
    --text-secondary: #cbd5e1;
    --text-tertiary: #1e293b;
  }

  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #cbd5e1;
    --bg-tertiary: #1e293b;

    --text-primary: #cbd5e1;
    --text-secondary: #475569;
    --text-tertiary: #1e293b;
  }

  html {
    scroll-behavior: smooth;    
  }

  body {
    ${tw`font-sans bg-primary text-primary antialiased`};
    ${tw`transition-all duration-500`};
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
