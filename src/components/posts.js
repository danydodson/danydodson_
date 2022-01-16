import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

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
              cover {
                childImageSharp {
                  gatsbyImageData
                }
              }
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
    const { body, frontmatter } = node
    const { date } = frontmatter

    return (
      <>
        <time>{date}</time>
        <MDXRenderer>{body}</MDXRenderer>
      </>
    )
  }

  return (
    <section>
      {posts && posts.map(({ node }, i) => (
        <article key={i}>
          {postInner(node)}
        </article>
      ))}
    </section>
  )
}

export default Posts
