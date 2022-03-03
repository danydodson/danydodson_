import { css } from 'twin.macro'

import RundDisplayThinWoff from '../fonts/rund-display/rund-display-thin/RundDisplay-Thin.woff'
import RundDisplayThinWoff2 from '../fonts/rund-display/rund-display-thin/RundDisplay-Thin.woff2'
import RundDisplayRegularWoff from '../fonts/rund-display/rund-display/RundDisplay-Regular.woff'
import RundDisplayRegularWoff2 from '../fonts/rund-display/rund-display/RundDisplay-Regular.woff2'
import RundDisplayMediumWoff from '../fonts/rund-display/rund-display-medium/RundDisplay-Medium.woff2'
import RundDisplayMediumWoff2 from '../fonts/rund-display/rund-display-medium/RundDisplay-Medium.woff2'
import RundDisplaySemiBoldWoff from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.woff'
import RundDisplaySemiBoldWoff2 from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.woff2'
import RundDisplayBlackWoff from '../fonts/rund-display/rund-display-black/RundDisplay-Black.woff'
import RundDisplayBlackWoff2 from '../fonts/rund-display/rund-display-black/RundDisplay-Black.woff2'

import RundTextThinWoff from '../fonts/rund-text/rund-text-thin/RundText-Thin.woff'
import RundTextThinWoff2 from '../fonts/rund-text/rund-text-thin/RundText-Thin.woff2'
import RundTextRegularWoff from '../fonts/rund-text/rund-text/RundText-Regular.woff'
import RundTextRegularWoff2 from '../fonts/rund-text/rund-text/RundText-Regular.woff2'
import RundTextSemiBoldWoff from '../fonts/rund-text/rund-text-semibold/RundText-SemiBold.woff'
import RundTextSemiBoldWoff2 from '../fonts/rund-text/rund-text-semibold/RundText-SemiBold.woff2'
import RundTextBlackWoff from '../fonts/rund-text/rund-text-black/RundText-Black.woff'
import RundTextBlackWoff2 from '../fonts/rund-text/rund-text-black/RundText-Black.woff2'

import RundTextThinItalicWoff from '../fonts/rund-text/rund-text-thin/RundText-ThinItalic.woff'
import RundTextThinItalicWoff2 from '../fonts/rund-text/rund-text-thin/RundText-ThinItalic.woff2'
import RundTextRegularItalicWoff from '../fonts/rund-text/rund-text/RundText-Italic.woff'
import RundTextRegularItalicWoff2 from '../fonts/rund-text/rund-text/RundText-Italic.woff2'
import RundTextSemiBoldItalicWoff from '../fonts/rund-text/rund-text-semibold/RundText-SemiBoldItalic.woff'
import RundTextSemiBoldItalicWoff2 from '../fonts/rund-text/rund-text-semibold/RundText-SemiBoldItalic.woff2'
import RundTextBlackItalicWoff from '../fonts/rund-text/rund-text-black/RundText-BlackItalic.woff'
import RundTextBlackItalicWoff2 from '../fonts/rund-text/rund-text-black/RundText-BlackItalic.woff2'

const rundDisplayNormalWeights = {
  100: [RundDisplayThinWoff, RundDisplayThinWoff2],
  400: [RundDisplayRegularWoff, RundDisplayRegularWoff2],
  500: [RundDisplayMediumWoff, RundDisplayMediumWoff2],
  600: [RundDisplaySemiBoldWoff, RundDisplaySemiBoldWoff2],
  900: [RundDisplayBlackWoff, RundDisplayBlackWoff2],
}

const rundTextNormalWeights = {
  100: [RundTextThinWoff, RundTextThinWoff2],
  400: [RundTextRegularWoff, RundTextRegularWoff2],
  600: [RundTextSemiBoldWoff, RundTextSemiBoldWoff2],
  900: [RundTextBlackWoff, RundTextBlackWoff2],
}

const rundTextItalicWeights = {
  100: [RundTextThinItalicWoff, RundTextThinItalicWoff2],
  400: [RundTextRegularItalicWoff, RundTextRegularItalicWoff2],
  600: [RundTextSemiBoldItalicWoff, RundTextSemiBoldItalicWoff2],
  900: [RundTextBlackItalicWoff, RundTextBlackItalicWoff2],
}

const rundDisplay = {
  name: 'RundDisplay',
  normal: rundDisplayNormalWeights,
}

const rundText = {
  name: 'RundDisplay',
  normal: rundTextNormalWeights,
  italic: rundTextItalicWeights,
}


const createFontFaces = (family, style = 'normal') => {
  let styles = ''

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
             url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
        text-rendering: optimizeLegibility;
      }
    `
  }

  return styles
}

const rundDisplayNormal = createFontFaces(rundDisplay)

const rundTextNormal = createFontFaces(rundText)
const rundTextItalic = createFontFaces(rundText, 'italic')

const fonts = css`
  ${rundDisplayNormal + rundTextNormal + rundTextItalic}
`

export default fonts
