module.exports = {
  plugins: [
    'babel-plugin-twin',
    'babel-plugin-macros',
    '@emotion/babel-plugin'
  ],
  presets: [
    [
      'babel-preset-gatsby',
      {
        '@babel/preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      }
    ]
  ]
}
