module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      borderRadius: {
        md: '1.25rem'
      },
      transitionTimingFunction: {
        nav: 'var(--ease)',
      },
      padding: {
        md: '-1.25rem'
      }
    }
  },

  plugins: [require('@tailwindcss/typography')]
}