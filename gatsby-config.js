require('dotenv').config()

const config = require('./src/config/site-config')

module.exports = {
  siteMetadata: config,

  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/src/content/jobs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`
      }
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `danydodson/`,
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-graphql-config`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          },
          {
            resolve: `gatsby-remark-smartypants`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        short_name: `danydodson`,
        name: `Dany Dodson`,
        theme_color: `#0f172a`,
        background_color: `#0f172a`,
        icon: `src/assets/logos/logo@4x.png`,
        display: `minimal-ui`
      }
    }
  ]
}
