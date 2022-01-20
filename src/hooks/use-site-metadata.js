import { useStaticQuery, graphql } from 'gatsby'

export default function useSiteMetadata() {

  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            siteUrl
            image
            title
            description
            copyright
            type
            author {
              name
              username
              email
              image
              bio
              
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
