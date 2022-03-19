import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout, Seo } from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import tw from 'twin.macro'

// site.com/projects/<project>

const ViewProjectTemplate = ({ data, location }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, description, cover, github, external, tags } = frontmatter

  const { pathname } = location

  const image = getImage(cover)
  const seoImage = image.images.fallback.src

  return (
    <Layout location={location}>
      <Seo path={pathname} title={`💻 Project: ${title} `} description={description} image={seoImage} date={date} />

      <section>
        <article>
          <h2>{title}</h2>

          <h2>{date}</h2>

          <GatsbyImage image={image} alt={title} css={[tw`border-4 border-black border-dashed`]} />

          <h2>{description}</h2>
          <h2>{github}</h2>
          <h2>{external}</h2>
          <h2>{title}</h2>

          {tags && tags.map((tag, i) => <h6 key={i}>{tag}</h6>)}

          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </section>
    </Layout>
  )
}

export const ProjectQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM D YYYY")
        description
        github
        external
        tags
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ViewProjectTemplate
