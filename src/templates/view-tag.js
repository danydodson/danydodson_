import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout, Seo } from '../components/layout'

// site.com/tag/<tag>/page/<page#>

const ViewTagTemplate = ({ data, pageContext, location }) => {
  const { tag, currentPage } = pageContext
  const { edges } = data.allMdx

  const { pathname } = location

  const pageTitle = currentPage > 0 ? `Tagged: #${tag} - Page ${currentPage} ` : `Tagged: #${tag} `

  return (
    <Layout location={location}>
      <Seo title={`💻 ${pageTitle} `} path={pathname} description={pageTitle} />

      <section>

        {currentPage > 0 ? <h2>Tag: {`#${tag} - Page ${currentPage}`}</h2> : <h2>Tag: {`#${tag}`}</h2>}

        <h2>
          page title:{pageTitle}
        </h2>

        <ul>
          {edges.map((edge, i) => (
            <li key={i}>
              <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>

        <br />

        <h2>all categories:</h2>

        {/* <ul>
          {categories.map((category, i) => (
            <li key={i}>
              <Link to={`/category/${category.fieldValue}`}>{category.fieldValue}</Link>
            </li>
          ))}
        </ul> */}

      </section>
    </Layout>
  )
}

export const TagQuery = graphql`
  query ($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { tags: { in: [$tag] }, template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date(formatString: "MMM D YYYY")
            description
            category
            tags
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
`

export default ViewTagTemplate

