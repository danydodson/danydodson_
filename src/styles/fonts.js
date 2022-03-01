import { css } from 'twin.macro'

import RundDisplayRegularWoff from '../fonts/rund-display/rund-display/RundDisplay-Regular.woff'
import RundDisplayRegularWoff2 from '../fonts/rund-display/rund-display/RundDisplay-Regular.woff2'
import RundDisplayRegularTtf from '../fonts/rund-display/rund-display/RundDisplay-Regular.ttf'

import RundDisplaySemiBoldWoff from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.woff'
import RundDisplaySemiBoldWoff2 from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.woff2'
import RundDisplaySemiBoldWoTtf from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.ttf'

const rundDisplayWeights = {
  100: [RundDisplayRegularWoff, RundDisplayRegularWoff2, RundDisplayRegularTtf],
  600: [RundDisplaySemiBoldWoff, RundDisplaySemiBoldWoff2, RundDisplaySemiBoldWoTtf],
}

const rundDisplayNormal = {
  name: 'RundDisplay',
  normal: rundDisplayWeights,
}

const createFontFaces = (family, style = 'normal') => {
  let styles = ''

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]
    const ttf = formats[2]

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
             url(${woff}) format('woff');
             url(${ttf}) format('truetype');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
        text-rendering: optimizeLegibility;
      }
    `
  }

  return styles
}

const rundDisplay = createFontFaces(rundDisplayNormal)

const fonts = css`
  ${rundDisplay}
`

export default fonts
