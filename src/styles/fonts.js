import { css } from 'twin.macro'

import RundDisplayRegularWoff from '../fonts/rund-display/rund-display/RundDisplay-Regular.woff'
import RundDisplayRegularWoff2 from '../fonts/rund-display/rund-display/RundDisplay-Regular.woff2'
import RundDisplaySemiBoldWoff from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.woff'
import RundDisplaySemiBoldWoff2 from '../fonts/rund-display/rund-display-semibold/RundDisplay-SemiBold.woff2'

const rundDisplayWeights = {
  100: [RundDisplayRegularWoff, RundDisplayRegularWoff2],
  600: [RundDisplaySemiBoldWoff, RundDisplaySemiBoldWoff2],
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

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
             url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
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
