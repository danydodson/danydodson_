import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from 'twin.macro'
import { Layout, Head } from '../components'

// site.com/projects/<project>

const ProjectsTemplate = ({ data, location }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, description, cover, github, external, tech } = frontmatter

  const { pathname } = location

  const image = getImage(cover)
  const seoImage = image.images.fallback.src

  return (
    <Layout location={location}>
      <Head title={`💻 Project: ${title} `} path={pathname} description={description} image={seoImage} />

      <section>
        <article>

          <h2>{title}</h2>
          <br />
          {/* <GatsbyImage image={image} alt={category} /> */}
          <h2>{date}</h2>
          <br />
          <GatsbyImage
            image={image}
            alt={title}
            css={css`
              border: 4px black dashed;
            `}
          />
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
`

export default ProjectsTemplate

