import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout, Seo } from '../components/layout'

// site.com/posts

const ViewPostsTemplate = ({ data, pageContext, location }) => {
  const { currentPage } = pageContext
  const { edges } = data.allMdx

  const { pathname } = location

  const pageTitle = currentPage > 0 ? `Posts List - Page ${currentPage} ` : `Posts List `

  return (
    <Layout location={location}>
      <Seo title={`💻 Posts List `} path={pathname} description={pageTitle} />

      <section>
        <Link to='/'>
          Go to Home
        </Link>

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

      </section>
    </Layout>
  )
}

export const PostSlug = graphql`
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
            title
            date(formatString: "MMM D YYYY")
            lastmod(formatString: "X")
            description
            category
            tags
          }
        }
      }
    }
  }
`

export default ViewPostsTemplate
