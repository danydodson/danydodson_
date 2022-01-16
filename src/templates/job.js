import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from 'twin.macro'
import { Layout, Head } from '../components'

// site.com/jobs/<job>

const JobsTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx
  const { title, company, description, cover, location, range, url } = frontmatter
  const image = getImage(cover)
  const seoImage = image.images.fallback.src

  return (
    <Layout>
      <Head title={`💻 Job: ${title} `} description={description} image={seoImage} />

      <section>
        <article>

          <h2>{title}</h2>
          <br />

          <GatsbyImage
            image={image}
            alt={company}
            css={css`
              border: 4px black dashed;
            `}
          />

          <br />
          <h2>{company}</h2>
          <br />
          <h2>{description}</h2>
          <br />
          {/* <GatsbyImage image={image} alt={category} /> */}
          <p>{location}</p>
          <br />
          <p>{range}</p>
          <br />
          <p>{url}</p>
          <br />

          <MDXRenderer>{body}</MDXRenderer>

        </article>
      </section>
    </Layout>
  )
}

export const JobBySlugQuery = graphql`
  query ($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }
    ) {
      body
      fields {
        slug
      }
      frontmatter {
        template
        title
        slug
        date(formatString: "MMM D YYYY")
        company
        description
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
        location
        range
        url
      }
    }
  }
`

export default JobsTemplate

