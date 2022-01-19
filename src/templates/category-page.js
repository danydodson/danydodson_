import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout, Head } from '../components'

// site.com/category/<category>

const CategoryTemplate = ({ data, pageContext, location }) => {
  const { categories, category, currentPage } = pageContext
  const { edges } = data.allMdx

  const { pathname } = location

  const pageTitle = currentPage > 0 ? `Category: ${category} - Page ${currentPage} ` : `Category: ${category} `

  return (
    <Layout location={location}>
      <Head title={`💻 ${pageTitle} `} path={pathname} description={pageTitle} />

      <section>

        <h2>
          Category Page: ({category})
        </h2>

        <h2>
          page title:{pageTitle}
        </h2>

        <ul>
          {edges.map((edge, i) => (
            <li key={i}>
              <Link to={`${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>

        <br />

        <h2>all categories:</h2>

        <ul>
          {categories.map((category, i) => (
            <li key={i}>
              <span>title: </span>
              <Link to={`/category/${category.fieldValue}`}>
                <span>{category.fieldValue}</span>
              </Link>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}

export const CategoryQuery = graphql`
  query ($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { category: { eq: $category }, template: { eq: "post" }, draft: { ne: true } } }
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

export default CategoryTemplate

