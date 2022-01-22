import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const results = useStaticQuery(graphql`
   {
     site {
       siteMetadata {
         siteUrl
         title
         about
         author
         username
         cover
         image
        }
      }
    }
  `)
  return results.site.siteMetadata
}

export default useSiteMetadata
