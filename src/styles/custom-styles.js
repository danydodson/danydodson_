import tw, { theme, css } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  }
})

// const customStyles = css`
//   body {
//     --webkit-tap-highlight-colorolor: ${theme`colors.purple.500`};
//     .antialiased {
//       -webkit-font-smoothing: antialiased;
//       -moz-osx-font-smoothing: grayscale;
//     }
//   }
// `

export default customStyles