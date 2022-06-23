const path = require('path')
const siteConfig = require('../config')

const paginateCategories = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const result = await graphql(`#graphql
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
    const slug = `/category/${category.fieldValue}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? slug : `${slug}/page/${i}`,
        component: path.resolve('./src/templates/view-category.js'),
        context: {
          category: category.fieldValue,
          current: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPath: i <= 1 ? slug : `${slug}/page/${i - 1}`,
          nextPath: `${slug}/page/${i + 1}`,
          hasPrev: i !== 0,
          hasNext: i !== numPages - 1
        }
      })
    }
    
    return null
  })
}

module.exports = paginateCategories