module.exports = {
  theme: {
    extend: {
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
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ]
}
