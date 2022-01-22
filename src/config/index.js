const config = {

  /* Site
  ========================================= */
  type: `website`,
  image: `/cards/og@2x.png`,
  title: `🖐 Web & Software Engineer. Currently working remotely from the mid west.`,
  description: `💻 danydodson.dev | 🎨 danys.art | ♡ Dany Dodson`,
  siteUrl: `https://danydodson.dev`,
  copyright: `© 2021 | Dany Dodson ♡`,


  /* Profile
  ========================================= */
  author: {
    name: `Dany Dodson`,
    username: `danydodson`,
    bio: `Award-winning writer. Subtly charming travel advocate. Web practitioner.`,
    image: `/cards/og@1x.png`,
    email: `dany@danydodson.dev`,
    map: `Evansville, IN`,
  },

  /* Utils
  ========================================= */
  canShare: true,
  postsPerPage: 10,

  seoTitle: (props) => { `💻 Job: ${props.title} ` },

  /* Nav Links
  ========================================= */
  navLinks: [
    { name: `About`, path: `/#about` },
    { name: `Experience`, path: `/#jobs` },
    { name: `Work`, path: `/#featured` },
    { name: `Contact`, path: `/#contact` }
  ],

  /* Social Media Links
  ========================================= */
  socials: [
    { name: `GitHub`, url: `https://github.com/danydodson` },
    { name: `Instagram`, url: `https://www.instagram.com/dany_dodson` },
    { name: `Twitter`, url: `https://twitter.com/danydodson` },
    { name: `Linkedin`, url: `https://www.linkedin.com/in/danydodson` },
    { name: `Codepen`, url: `https://codepen.io/danydodson` }
  ],

  skills: ['JavaScript (ES6+)', 'React', 'Eleventy', 'Vue', 'Node.js', 'WordPress'],
}

module.exports = config
