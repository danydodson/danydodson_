import tw, { css, theme } from 'twin.macro'

const themeBase = css`

  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #475569;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
    --text-box-success: #dcffe4;
    --text-box-info: #17a2b8;
    --text-box-warning: #ffc107;
    --text-box-danger: #ee5252;
  }

  .dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #cbd5e1;
    --text-secondary: #ffffff;
    --color-primary: #2563eb;
    
    --text-box-success: #3f774b;
    --text-box-info: #2e5d64;
    --text-box-warning: #796733;
    --text-box-danger: #693434;

    --pill-100-bg: #fde876;
    --pill-100-text: #735f00;

    --pill-200-bg: #c0e6ff;
    --pill-200-text: #325c80;

    --pill-300-bg: #99ffa0;
    --pill-300-text: #12702e;

    --pill-400-bg: #ffd4a0;
    --pill-400-text: #a53725;
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

`

export default themeBase
