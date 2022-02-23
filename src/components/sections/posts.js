import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Section } from '.'
import { Pills } from '..'

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
    const { title, tags, description } = frontmatter

    return (
      <>
        <h3 tw='text-5xl'>{title}</h3>
        <Pills items={tags} />
        <p tw='text-2xl'>{description}</p>
      </>
    )
  }

  return (
    <Section name='posts' fullPage centered>
      <h1 tw='text-7xl'>Writings</h1>
      {posts && posts.map(({ node }, item) => (
        <article tw='my-10' key={item}>
          {postInner(node)}
        </article>
      ))}
    </Section>
  )
}

export default Posts
