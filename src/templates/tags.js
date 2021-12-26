import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components'

// site.com/tags

const TagsTemplate = ({ data, location }) => {
  const tags = data.allMdx.group

  return (
    <Layout>
      <section>

        <h2>All Tags</h2>

        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}

export const TagsQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsTemplate
