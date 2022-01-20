const CATEGORY_COLORS = require('./colors')
const CATEGORY_COLOR_EXTRA = require('./colors')

module.exports = {
  CATEGORY_COLORS,
  CATEGORY_COLOR_EXTRA,
  getCategories: async graphql => {
    const {
      data: {
        allMdx: { group }
      }
    } = await graphql(`
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

    return group.map((cat, i) => ({
      ...cat,
      categoryColor: CATEGORY_COLORS[i] || CATEGORY_COLOR_EXTRA

    }))

  }
}

