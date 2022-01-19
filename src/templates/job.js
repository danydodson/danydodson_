import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from 'twin.macro'
import { Layout, Seo } from '../components'

// site.com/jobs/<job>

const JobsTemplate = ({ data, location }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, company, description, cover, range, url } = frontmatter

  const { pathname } = location

  const image = getImage(cover)
  const seoImage = image.images.fallback.src

  return (
    <Layout location={location}>
      <Seo title={`💻 Job: ${title} `} path={pathname} description={description} type='article' image={seoImage} date={date} />

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
        date
        company
        description
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
        range
        url
      }
    }
  }
`

export default JobsTemplate

