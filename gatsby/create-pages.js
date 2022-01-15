const path = require('path')

const createPostsPages = require('./pagination/posts-pages.js')
const createTagsPages = require('./pagination/tags-pages.js')
const createCategoriesPages = require('./pagination/categories-pages.js')

const { getCategories } = require('./constants/categories')

const createPages = async ({ graphql, actions, reporter }) => {
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
              slug
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

  await createTagsPages(graphql, actions)
  await createCategoriesPages(graphql, actions)
  await createPostsPages(graphql, actions)
}

module.exports = createPages
