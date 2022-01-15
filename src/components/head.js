import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({ title, description, image }) => {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          url
          author {
            username
          }
        }
      }
    }
  `)

  const { defaultTitle, defaultDescription, defaultImage, author, url } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}`
  }

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s ${defaultTitle}`}>
      <html lang='en' />

      <meta name='image' content={seo.image} />
      <meta name='description' content={seo.description} />

      <link rel='canonical' href={'https://danydodson.dev/'} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      <meta property='fb:app_id' content='478714590211729' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:creator' content={author.username} />
      <meta property='twitter:title' content={seo.title} />
      <meta property='twitter:description' content={seo.description} />
      <meta property='twitter:image' content={seo.image} />
      <meta property='twitter:url' content={seo.url} />
    </Helmet>
  )
}

export default Head
