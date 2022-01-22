import { useStaticQuery, graphql } from 'gatsby'

export default function useSiteMetadata() {

  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            type
            image
            title
            description
            siteUrl
            author {
              name
              username
              image
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
