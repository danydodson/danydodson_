module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Hans Kendrick', 'sans-serif']
      },
      colors: {
        electric: '#f19dff',
        ribbon: '#acc3ff',
      },
      borderRadius: {
        xs: '1px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
