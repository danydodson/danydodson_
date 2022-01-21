import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({ path, title, description, image, type, published, lastmod }) => {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          defaultType: type
          author {
            username
          }
        }
      }
    }
  `)

  const { siteUrl, defaultTitle, defaultDescription, defaultImage, defaultType, author } = site.siteMetadata

  const seo = {
    url: `${siteUrl}${path || siteUrl}`,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    type: type || defaultType
  }

  return (
    <Helmet htmlAttributes={{ prefix: 'og: http://ogp.me/ns#' }} title={title} defaultTitle={seo.title}>
      <html lang='en' />

      <link rel='canonical' href={seo.url} />

      <meta name='title' content={seo.title} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='publisher' content={`Dany Dodson, ${siteUrl}`} />

      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content={seo.type} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:site_name' content='Dany Dodson' />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:width' content='450' />
      <meta property='og:image:height ' content='700' />

      <meta property='article:author' content={author.username} />
      <meta property='article:publisher' content='https://danydodson.dev/' />

      {published && (<meta property='article:published_time' content={published} />)}
      {lastmod && (<meta property='article:modified_time' content={lastmod} />)}

      <meta property='fb:app_id' content='301953321955514' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:site' content={`@${author.username}`} />
      <meta name='twitter:domain' content={author.username} />
      <meta name='twitter:image:src' content={seo.image} />
      <meta name='twitter:creator' content={`@${author.username}`} />
      <meta name='twitter:url' content={seo.url} />

      <meta name='format-detection' content='telephone=no' />

      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />

      <meta name='google-site-verification' content='HsxvbQJydXYPI-OHr4-e7NhnkgKLm9ikncLDKuSKTHs' />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-191503619-1"></script>

    </Helmet>
  )
}

export default Seo
