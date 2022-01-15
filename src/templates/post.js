import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from 'twin.macro'
import { Layout } from '../components'

// site.com/posts

const PostsTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, description, cover, category, tags } = frontmatter

  const image = getImage(cover)

  return (
    <Layout>
      <section>

        <article>
          <h2>{title}</h2>
          <br />

          <time>{date}</time>
          <br />

          <GatsbyImage
            image={image}
            alt={category}
            css={css`
              border: 4px black dashed;
            `}
          />
          <br />

          <p>{description}</p>

          {tags && tags.map((tag, i) => (
            <h6 key={i}>
              <Link to={`/tag/${tag}`}>{tag}</Link>
            </h6>
          ))}

          <h6>
            <Link to={`/category/${category}`}>{category}</Link>
          </h6>

          <MDXRenderer>{body}</MDXRenderer>

        </article>

      </section>
    </Layout>
  )
}

export const PostBySlugQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
        categorySlug
        tagSlugs
      }
      frontmatter {
        title
        slug
        date(formatString: "MMM D YYYY")
        description
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
            )
          }
        }
        category
        tags
      }
    }
  }
`

export default PostsTemplate

