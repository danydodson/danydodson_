require('dotenv').config({ path: `.env` })

const config = require('./src/config')

module.exports = {
  siteMetadata: config,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cards`,
        path: `${__dirname}/src/assets/cards`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/assets/docs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `#graphql
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            },
            allMdx(
              filter: {frontmatter: {template: {in: [ "post", "project", "job"]}}}
            ) {
              nodes {
                frontmatter {
                  slug
                  date
                }
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { nodes: allMdxNodes }
        }) => {
          const allMdxNodesMap = allMdxNodes.map(node => {
            return { date: node.frontmatter.date }
          })
          return allPages.map(page => {
            return {
              ...page,
              ...allMdxNodesMap[0]
            }
          })
        },
        serialize: ({ path, date }) => {
          return {
            url: path,
            lastmod: date
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `#graphql
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.body }]
                })
              })
            },
            query: `#graphql
              {
                allMdx(
                  limit: 1000,
                  filter: { frontmatter: { template: { eq: "post" } } },
                  sort: { order: DESC, fields: [frontmatter___lastmod] }
                ) {
                  edges {
                    node {
                      body
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        slug
                        date
                        description
                        cover {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: '☕ Dany Dodson\'s idée fixes',
            match: "^/post/"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        short_name: `@danydodson`,
        name: config.title,
        description: config.about,
        orientation: `portrait-primary`,
        display: `minimal-ui`,
        theme_color: `#0f172a`,
        background_color: `#0f172a`,
        icon: `src/assets/icons/icon-x512.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-graphql-config`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // todo: add tracking id
        trackingId: `UA-130109835-1`,
      }
    },
  ]
}
