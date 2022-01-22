// import React from 'react'
// import tw, { styled } from 'twin.macro'
// import { Icon } from './icons'

// const TextBlock = ({ theme, children }) => {
//   let icon

//   switch (theme) {
//     case 'success':
//       icon = <Icon name='Star' />
//       break
//     case 'warning':
//       icon = <Icon name='Moon' />
//       break
//     case 'danger':
//       icon = <Icon name='Sun' />
//       break
//     default:
//       icon = <Icon name='Sun' />
//   }

//   return (
//     <TextBlock>
//       <StyledIconWrap theme={theme}>
//         {icon}
//       </StyledIconWrap>
//       {children}
//     </TextBlock>
//   )
// }

// const TextBlock = styled.div(({ variant, isDark }) => [
//   tw`relative border-l-2 my-8 mx-4 py-8 px-5 rounded`
//   // tw`border`
// ])

// const IconWrap = styled.div(({ variant, isDark }) => [
//   tw``
// ])

// export default TextBlock

// const StyledTextBlock = styled.div`

//     /* Default for primary */
//     border-color: ${() => setThemeVars('#666', theme.fontColorDark)};
//     /* background: ${() => setThemeVars('#f6f5f8', '#36353b')}; */
//     /* Based on chosen theme */
//     border-color: ${props => color[props.theme]};
//     /* background: ${props => setThemeVars(bgColorLight[props.theme], bgColorDark[props.theme])}; */
// `

// const StyledIconWrap = styled.div`
//     position: absolute;
//     top: -1.5rem;
//     left: -1.5rem;
//     /* background: ${() => setThemeVars(theme.bgColorLight, theme.bgColorDark)}; */
//     padding: 0.5rem;
//     border-radius: 50%;
//     svg {
//         width: 30px;
//         height: 30px;
//         /* Default */
//         /* fill: ${() => setThemeVars('#666', theme.fontColorDark)}; */
//         /* Theme */
//         /* fill: ${props => color[props.theme]}; */
//     }
// `
