const path = require('path')
const siteConfig = require('../config')

const { getCategories } = require('./get-categories')

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const categories = await getCategories(graphql)

  const result = await graphql(`
    {
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

  result.data.allMdx.group.map(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage)
    const categorySlug = `/category/${category.fieldValue}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}/page/${i}`,
        component: path.resolve('./src/templates/category-page.js'),
        context: {
          category: category.fieldValue,
          categories,
          current: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
          nextPath: `${categorySlug}/page/${i + 1}`,
          hasPrev: i !== 0,
          hasNext: i !== numPages - 1
        }
      })
    }
    return null
  })
}
