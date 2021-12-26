module.exports = {
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-twin',
    'babel-plugin-macros'
  ],
  presets: [
    [
      'babel-preset-gatsby',
      {
        '@babel/preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
}
