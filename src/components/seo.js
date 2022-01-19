import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({ path, title, description, image, type, date, lastmod, tags }) => {

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
    image: `${siteUrl}${image || defaultImage}`,
    type: type || 'website',
    date: date || null,
    lastmod: lastmod || null,
    tags: tags || [],
  }

  return (
    <Helmet title={title} defaultTitle={seo.title}>
      <html lang='en' />

      {/* Primary Meta Tags */}
      <link rel='canonical' href={seo.url} />

      <meta name='title' content={seo.title} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='robots' content='index, follow' />
      <meta name='publisher' content={`Dany Dodson, ${siteUrl}`} />

      {/* Facebook Tags */}
      <meta property='og:url' content={seo.url} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:site_name' content='Dany Dodson' />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:alt' content={seo.title} />
      <meta property='og:type' content={seo.type} />

      {/* Article Tags */}
      <meta property='article:published_time' content={seo.date} />
      <meta property='article:modified_time' content={seo.lastmod} />
      <meta property='article:tag' content={[seo.tags]} />

      {/* Twitter Tags */}
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:image:alt' content={seo.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={`@${author.username}`} />

      {/* For Twitter Analytics */}
      <meta name='twitter:site' content={`@${author.username}`} />

      {/* Apple */}
      <meta name='format-detection' content='telephone=no' />

      {/* PWA */}
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />

      {/* For Facebook Insights */}
      <meta property='fb:app_id' content='478714590211729' />
      
      <script async defer crossorigin='anonymous' src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=478714590211729&autoLogAppEvents=1' nonce='gIldAg2n' />

    </Helmet>
  )
}

export default Seo
