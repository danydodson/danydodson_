module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {

      backgroundColor: {
        primary: 'var(--bg-primary)',
        navbar: 'var(--bg-navbar-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--color-primary)'
      },

      textColor: {
        primary: 'var(--text-primary)',
        navbar: 'var(--bg-navbar-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--color-primary)'
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