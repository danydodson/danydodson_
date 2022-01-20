import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Pills } from '../components'

const Posts = () => {

  const data = useStaticQuery(graphql`
    {
      posts: allMdx(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            body
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM D YYYY")
              description
              category
              tags
            }
          }
        }
      }
    }
  `)

  const posts = data.posts.edges.filter(({ node }) => node)

  const postInner = (node) => {
    const { frontmatter } = node
    const { title, tags } = frontmatter

    return (
      <>
        <h3>{title}</h3>
        <Pills items={tags} />
      </>
    )
  }

  return (
    <section>
      {posts && posts.map(({ node }, item) => (
        <article key={item}>
          {postInner(node)}
        </article>
      ))}
    </section>
  )
}

export default Posts
