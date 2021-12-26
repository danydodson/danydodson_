import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components'

// site.com/tag/<tag>

const TagTemplate = ({ data, pageContext, location }) => {
  const { tag, categories, currentPage } = pageContext
  const { edges } = data.allMdx

  const pageTitle = currentPage > 0 ? `Tagged: #${tag} - Page ${currentPage} ` : `Tagged: #${tag} `

  return (
    <Layout>

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

        <h2>all categories:</h2>

        <ul>
          {categories.map((category, i) => (
            <li key={i}>
              <Link to={`/category/${category.fieldValue}`}>{category.fieldValue}</Link>
            </li>
          ))}
        </ul>

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
            slug
            date(formatString: "MMM D YYYY")
            description
            category
            tags
            # cover {
            #   childImageSharp {
            #     gatsbyImageData(width: 700)
            #   }
            # }
          }
        }
      }
    }
  }
`

export default TagTemplate

