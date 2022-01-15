require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./src/config/site-config')

module.exports = {
  siteMetadata: config,

  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-graphql-config`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`
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
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dany Dodson`,
        start_url: `/`,
        short_name: `danydodson`,
        theme_color: `#1b1f23`,
        background_color: `#fafffd`,
        icon: `static/logos/logo@4x.png`,
        display: `minimal-ui`,
      }
    },
    `gatsby-plugin-offline`,
  ]
}
