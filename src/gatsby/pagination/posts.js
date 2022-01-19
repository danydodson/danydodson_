const path = require('path')
const siteConfig = require('../../config/site-config')

const { getCategories } = require('../constants/categories.js')

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const categories = await getCategories(graphql)

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        totalCount
      }
    }
  `)

  const { postsPerPage } = siteConfig
  const numPages = Math.ceil(result.data.allMdx.totalCount / postsPerPage)

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/posts' : `/posts/page/${i}`,
      component: path.resolve('./src/templates/posts-page.js'),
      context: {
        categories,
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPath: i <= 1 ? '/posts' : `/posts/page/${i - 1}`,
        nextPath: `/posts/page/${i + 1}`,
        hasPrev: i !== 0,
        hasNext: i !== numPages - 1
      }
    })
  }
}
