const { createFilePath } = require('gatsby-source-filesystem')

const path = require('path')

const paginatePosts = require('./src/helpers/paginate-posts.js')
const paginateCategories = require('./src/helpers/paginate-categories.js')
const paginateTags = require('./src/helpers/paginate-tags.js')

const getCategories = require('./src/helpers/get-categories')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const categories = await getCategories(graphql)

  // site.com/404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found.js')
  })

  // site.com/tags
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags.js'),
    context: { categories }
  })

  // site.com/categories
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories.js'),
    context: { categories }
  })

  // site.com/resume
  createPage({
    path: '/resume',
    component: path.resolve('./src/templates/resume.js')
  })

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  // reporter.success(JSON.stringify(result, null, 2))

  const { edges } = result.data.allMdx

  edges.map(edge => {

    if (edge
      && edge.node
      && edge.node.frontmatter
      && edge.node.frontmatter.template
      && edge.node.frontmatter.template === 'post'
    ) {
      // site.com/post/<post>
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: { slug: `${edge.node.fields.slug}`, categories }
      })
    } else if (edge
      && edge.node
      && edge.node.frontmatter
      && edge.node.frontmatter.template
      && edge.node.frontmatter.template === 'project'
    ) {
      // site.com/project/<project>
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/project.js'),
        context: { slug: `${edge.node.fields.slug}`, categories }
      })
    } else if (edge
      && edge.node
      && edge.node.frontmatter
      && edge.node.frontmatter.template
      && edge.node.frontmatter.template === 'job'
    ) {
      // site.com/job/<job>
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/job.js'),
        context: { slug: `${edge.node.fields.slug}`, categories }
      })
    }

    return null
  })

  await paginatePosts(graphql, actions)
  await paginateCategories(graphql, actions)
  await paginateTags(graphql, actions)

}

exports.onCreateNode = ({ node, actions, getNode }) => {
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

