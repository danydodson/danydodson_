import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components'

// site.com/posts

const PostsTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx
  const { title, date, description, category, tags } = frontmatter

  return (
    <Layout>
      <section>

        <article>
          <h2>{title}</h2>

          <time>{date}</time>

          {/* <GatsbyImage image={image} alt={category} /> */}

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
        category
        tags
      }
    }
  }
`

export default PostsTemplate

