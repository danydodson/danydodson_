const path = require('path')

const paginatePosts = require('./paginate-posts.js')
const paginateCategories = require('./paginate-categories.js')
const paginateTags = require('./paginate-tags.js')

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // site.com/404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found.js')
  })

  // site.com/tags
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/list-tags.js')
  })

  // site.com/categories
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/list-categories.js')
  })

  // site.com/resume
  createPage({
    path: '/resume',
    component: path.resolve('./src/templates/view-resume.js')
  })

  const result = await graphql(`#graphql
    {
      pages: allMdx(
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
      categories: allMdx(
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  // reporter.success(JSON.stringify(result, null, 2))

  const { edges } = result.data.pages
  const { group } = result.data.categories

  const categories = group.map(category => ({
    ...category,
  }))

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
        component: path.resolve('./src/templates/view-post.js'),
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
        component: path.resolve('./src/templates/view-project.js'),
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
        component: path.resolve('./src/templates/view-job.js'),
        context: { slug: `${edge.node.fields.slug}`, categories }
      })
    }

    return null
  })

  await paginatePosts(graphql, actions)
  await paginateCategories(graphql, actions)
  await paginateTags(graphql, actions)

}

module.exports = createPages