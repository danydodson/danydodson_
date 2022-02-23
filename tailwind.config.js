module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        quaternary: 'var(--text-quaternary)',
      },
      borderRadius: {
        md: '1.25rem'
      },
      height: {
        'nav': 'var(--nav-height)',
        'nav-scrolling': 'var(--nav-height-scrolling)',
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