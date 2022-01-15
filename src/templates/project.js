import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components'

// site.com/projects/<project>

const ProjectsTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, description, github, external, tech } = frontmatter

  return (
    <Layout>
      <section>
        <article>

          <h2>{title}</h2>
          <br />
          {/* <GatsbyImage image={image} alt={category} /> */}
          <h2>{date}</h2>
          <br />
          <h2>{description}</h2>
          <br />
          <h2>{github}</h2>
          <br />
          <h2>{external}</h2>
          <br />
          <h2>{title}</h2>
          <br />

          {tech && tech.map((tag, i) => (
            <h6 key={i}>
              {tag}
            </h6>
          ))}
          <br />

          <MDXRenderer>{body}</MDXRenderer>

        </article>
      </section>
    </Layout>
  )
}

export const ProjectBySlugQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        template
        title
        slug
        date(formatString: "MMM D YYYY")
        description
        github
        external
        tech
      }
    }
  }
`

export default ProjectsTemplate

