import { css } from '@emotion/react'

import HansKendrickRegularWoff from '../fonts/hans-kendrick/neuehanskendrick-regular.woff'
import HansKendrickRegularWoff2 from '../fonts/hans-kendrick/neuehanskendrick-regular.woff2'
import HansKendrickRegularTtf from '../fonts/hans-kendrick/neuehanskendrick-regular.ttf'

import HansKendrickRegularItalicWoff from '../fonts/hans-kendrick/neuehanskendrick-regularitalic.woff'
import HansKendrickRegularItalicWoff2 from '../fonts/hans-kendrick/neuehanskendrick-regularitalic.woff2'
import HansKendrickRegularItalicTtf from '../fonts/hans-kendrick/neuehanskendrick-regularitalic.ttf'

const hansKendrickNormalWeights = {
  400: [HansKendrickRegularWoff, HansKendrickRegularWoff2, HansKendrickRegularTtf],
}

const hansKendrickItalicWeights = {
  400: [HansKendrickRegularItalicWoff, HansKendrickRegularItalicWoff2, HansKendrickRegularItalicTtf],
}

const hanskendrick = {
  name: 'Hans Kendrick',
  normal: hansKendrickNormalWeights,
  italic: hansKendrickItalicWeights
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
      }
    `
  }

  return styles
}

const hansKendrickNormal = createFontFaces(hanskendrick)
const hansKendrickItalic = createFontFaces(hanskendrick, 'italic')

const fonts = css`
  ${hansKendrickNormal + hansKendrickItalic}
`

export default fonts
