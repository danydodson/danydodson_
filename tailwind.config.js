module.exports = {
  theme: {
    extend: {

      colors: {
        electric: '#f19dff',
        ribbon: '#acc3ff',
      },

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

      borderRadius: {
        xs: '1px',
      },

    }
  },

  plugins: [
    require('@tailwindcss/typography')
  ]
}
