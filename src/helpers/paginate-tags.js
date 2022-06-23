const path = require('path')
const siteConfig = require('../config')

const paginateTags = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const result = await graphql(`#graphql
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
    const slug = `/tag/${tag.fieldValue}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? slug : `${slug}/page/${i}`,
        component: path.resolve('./src/templates/view-tag.js'),
        context: {
          tag: tag.fieldValue,
          currentPage: i,
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

module.exports = paginateTags