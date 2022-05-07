const { createFilePath } = require('gatsby-source-filesystem')

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      // site.com/<slug>
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug
      })
    } else {
      const value = createFilePath({ node, getNode })
      // site.com/<slug>
      createNodeField({
        node,
        name: 'slug',
        value
      })
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tag/${tag}`)
      // site.com/tag/<tagSlug>
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${node.frontmatter.category}`
      // site.com/category/<categorySlug>
      createNodeField({ node, name: 'categorySlug', value: categorySlug })
    }
  }

}

module.exports = onCreateNode
