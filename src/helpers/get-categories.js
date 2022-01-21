module.exports = {

  getCategories: async graphql => {

    const { data: { allMdx: { group } } } = await graphql(`
      query CategoriesListQuery {
        allMdx(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return group.map((category) => ({
      ...category,
    }))

  }

}

