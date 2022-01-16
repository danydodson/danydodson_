import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Projects = () => {

  const data = useStaticQuery(graphql`
    {
      projects: allMdx(
        filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            body
            excerpt
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
              github
              external
              tech
            }
          }
        }
      }
    }
  `)

  const projects = data.projects.edges.filter(({ node }) => node)

  const projectInner = (node) => {
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
      {projects && projects.map(({ node }, i) => (
        <article key={i}>
          {projectInner(node)}
        </article>
      ))}
    </section>
  )
}

export default Projects
