import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({ path, title, description, image }) => {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          author {
            username
          }
        }
      }
    }
  `)

  const { siteUrl, defaultTitle, defaultDescription, defaultImage, author } = site.siteMetadata

  const seo = {
    url: `${siteUrl}${path || siteUrl}`,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`
  }

  return (
    <Helmet title={title} defaultTitle={seo.title}>
      <html lang='en' />

      <meta name='image' content={seo.image} />
      <meta name='description' content={seo.description} />

      <link rel='canonical' href={seo.url} />

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

Seo.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default Seo
