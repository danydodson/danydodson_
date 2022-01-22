module.exports = {
  theme: {
    extend: {

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
        md: '1.25rem'
      },

      padding: {
        md: '-1.25rem'
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
