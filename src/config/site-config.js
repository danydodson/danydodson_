const config = {

  url: `https://danydodson-staging.herokuapp.com`,
  image: `/logos/logo@4.png`,
  title: `🖐 Web & Software Engineer. Currently working remotely from the mid west.`,
  description: `💻 danydodson.dev | 🎨 danys.art | ♡ Dany Dodson`,
  copyright: `© 2021 | Dany Dodson ♡`,

  author: {
    name: `Dany Dodson`,
    username: `danydodson`,
    email: `danydodson@gmail.com`,
    image: `/cards/og@1x.png`,
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

  googleAnalyticsId: 'UA-73379983-2',

}

module.exports = config
