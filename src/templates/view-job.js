import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import tw from 'twin.macro'
import { Layout, Seo } from '../components/layout'

// site.com/jobs/<job>

const ViewJobTemplate = ({ data, location }) => {
  const { body, frontmatter } = data.mdx
  const { title, company, description, cover, range, url } = frontmatter

  const { pathname } = location

  const image = getImage(cover)
  const seoImage = image.images.fallback.src

  return (
    <Layout location={location}>
      <Seo
        path={pathname}
        title={`💻 Job: ${title} `}
        description={description}
        image={seoImage}
      />

      <section>
        <article>
          <h2>{title}</h2>

          <GatsbyImage
            css={[tw`border-4 border-black border-dashed`]}
            image={image}
            alt={company}
          />

          <h2>{company}</h2>
          <h2>{description}</h2>
          <p>{range}</p>
          <p>{url}</p>

          <MDXRenderer>{body}</MDXRenderer>

        </article>
      </section>

    </Layout>
  )
}

export const JobQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
        company
        range
        url
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ViewJobTemplate
