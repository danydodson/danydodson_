import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout, Seo } from '../components'

// site.com/categories

const CategoriesTemplate = ({ data, location }) => {
  const categories = data.allMdx.group
  const { pathname } = location

  const description = 'Site Categories'

  return (
    <Layout location={location}>
      <Seo title={`💻 ${description} `} path={pathname} description={description} />

      <section>

        <h2>All Catagories</h2>

        <ul>
          {categories.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/category/${category.fieldValue}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}

export const CategoriesQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`

export default CategoriesTemplate

