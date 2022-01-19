import { useStaticQuery, graphql } from 'gatsby'

export default function useTagsList() {

  const { allMdx } = useStaticQuery(
    graphql`
      query TagsListQuery {
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
  )

  return allMdx.group
}

