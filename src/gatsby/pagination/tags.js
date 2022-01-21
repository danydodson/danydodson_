const path = require('path')
const siteConfig = require('../../../site-config')

const { getCategories } = require('../constants/categories.js')

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const categories = await getCategories(graphql)

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  result.data.allMdx.group.map(tag => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage)
    const tagSlug = `/tag/${tag.fieldValue}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
        component: path.resolve('./src/templates/tag-page.js'),
        context: {
          tag: tag.fieldValue,
          categories,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPath: `${tagSlug}/page/${i + 1}`,
          hasPrev: i !== 0,
          hasNext: i !== numPages - 1
        }
      })
    }
    return null
  })
}
