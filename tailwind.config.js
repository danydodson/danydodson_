module.exports = {
  theme: {
    extend: {

      colors: {

        set1: {
          background: "#99ffa0",
          text: "#12702e"
        },

        set2: {
          background: "#fde876",
          text: "#735f00"
        },

        set3: {
          background: "#c0e6ff",
          text: "#325c80"
        },

        set4: {
          background: "#ffd4a0",
          text: "#a53725"
        },

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
        md: '1.25rem'
      },
    }
  },

  plugins: [
    require('@tailwindcss/typography')
  ]
}
