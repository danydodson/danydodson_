module.exports = {
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Hans Kendrick', 'sans-serif']
      // },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--color-primary)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--color-primary)'
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
