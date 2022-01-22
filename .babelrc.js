module.exports = {
  plugins: [
    'babel-plugin-twin',
    'babel-plugin-macros'
  ],
  presets: [
    [
      'babel-preset-gatsby',
      {
        '@babel/preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      },
      '@emotion/babel-preset-css-prop',
    ]
  ]
}
