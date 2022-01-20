import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from 'twin.macro'
import { Layout, Seo } from '../components'

// site.com/posts

const PostsTemplate = ({ data, location }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, lastmod, description, cover, category, tags } = frontmatter

  const { pathname } = location

  const image = getImage(cover)
  const seoImage = image.images.fallback.src

  return (
    <Layout location={location}>
      <Seo title={`💻 Post: ${title} `} path={pathname} description={description} type='article' image={seoImage} date={date} lastmod={lastmod} tags={tags} />

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
        date
        lastmod
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
`

export default PostsTemplate

