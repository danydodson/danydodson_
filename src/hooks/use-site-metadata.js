import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {

  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            url
            title
            description
            copyright
            author {
              name
              username
              email
              image
              bio
              location
            }
            socials {
              name
              url
            }
            navLinks {
              name
              path
            }
            skills
            postsPerPage
          }
        }
      }
    `
  )

  return site.siteMetadata
}
