const config = {

  url: `https://danys.art`,
  title: `🖐️ Web & Software Engineer. Currently working remotely from the mid west.`,
  description: `💻 danydodson.dev | 🎨 danys.art | ♡ Dany Dodson`,
  copyright: `© 2021 | Dany Dodson ♡`,

  author: {
    name: `Dany Dodson`,
    username: `danydodson`,
    email: `danydodson@gmail.com`,
    image: `/cards/og@1.png`,
    bio: `Award-winning writer. Subtly charming travel advocate. Web practitioner.`,
    location: `Evansville, IN`,
  },

  navLinks: [
    { name: `About`, path: `/#about` },
    { name: `Experience`, path: `/#jobs` },
    { name: `Work`, path: `/#featured` },
    { name: `Contact`, path: `/#contact` }
  ],
  
  socials: [
    { name: `GitHub`, url: `https://github.com/danydodson` },
    { name: `Instagram`, url: `https://www.instagram.com/dany_dodson` },
    { name: `Twitter`, url: `https://twitter.com/danydodson` },
    { name: `Linkedin`, url: `https://www.linkedin.com/in/danydodson` },
    { name: `Codepen`, url: `https://codepen.io/danydodson` }
  ],
  
  skills: ['JavaScript (ES6+)', 'React', 'Eleventy', 'Vue', 'Node.js', 'WordPress'],
  
  postsPerPage: 10,

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    delay,
    distance: `20px`,
    duration: 500,
    easing: `cubic-bezier(0.645, 0.045, 0.355, 1)`,
    origin: `bottom`,
    rotate: { x: 0, y: 0, z: 0 },
    scale: 1,
    opacity: 0,
    mobile: true,
    reset: false,
    useDelay: `always`,
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  }),

  googleAnalyticsId: 'UA-73379983-2',

}

module.exports = config
