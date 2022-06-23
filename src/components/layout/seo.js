import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../hooks'

const Seo = props => {

  const { isBlog, lang = 'en', image } = props

  const { siteUrl, title, about, username, author, cover } = useSiteMetadata()

  const seo = {
    title: props.title || title,
    url: new URL(props.path, siteUrl) || siteUrl,
    description: props.description || about,
    image: image ? new URL(image, siteUrl) : new URL(cover, siteUrl)
  }

  return (
    <Helmet title={seo.title}>
      <html lang={lang} prefix='og: http://ogp.me/ns#' />
      <link rel='canonical' href={seo.url} />
      <meta name='title' content={seo.title} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='publisher' content={siteUrl} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:type' content={isBlog ? 'article' : 'website'} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:site_name' content={author} />
      <meta property='og:image' content={seo.image} />

      {isBlog && <meta property='article:author' content={author} />}
      {isBlog && <meta property='article:publisher' content={siteUrl} />}
      {isBlog && <meta property='article:published_time' content={props.date} />}

      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:site' content={`@${username}`} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:creator' content={`@${username}`} />
      <meta name='twitter:domain' content={username} />


      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='format-detection' content='telephone=no' />

      <meta property='fb:app_id' content='301953321955514' />

      <meta name='google-site-verification' content='HsxvbQJydXYPI-OHr4-e7NhnkgKLm9ikncLDKuSKTHs' />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-191503619-1"></script>
    </Helmet>
  )
}

export default Seo
