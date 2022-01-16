import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components'

// site.com/posts/<post>

const PostTemplate = ({ data, pageContext }) => {
  const { categories, currentPage } = pageContext
  const { edges } = data.allMdx

  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} ` : `Posts `

  return (
    <Layout>

      <section>

        {currentPage > 0 ? <h2>Posts Archive: Page - {currentPage}</h2> : <h3>Posts Archive </h3>}

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

        <br/>
        
        <h2>All Categories</h2>

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

export const PostBySlug = graphql`
  query ($postsLimit: Int!) {
    allMdx(
      limit: $postsLimit
      filter: { frontmatter: { draft: { ne: true }, template: {eq: "post" } } }
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
            template
            title
            slug
            date(formatString: "MMM D YYYY")
            description
            category
            tags
          }
        }
      }
    }
  }
`

export default PostTemplate
