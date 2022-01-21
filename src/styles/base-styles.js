import tw, { css, theme } from 'twin.macro'

const baseStyles = css`

  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }

  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --color-primary: #2563eb;
  }

  body {
    ${tw`bg-primary text-primary antialiased transition-all duration-200`};  
    --webkit-tap-highlight-colorolor: ${theme`colors.purple.500`};
  }

  #___graphql,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
`

export default baseStyles
