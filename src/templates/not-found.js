import React from 'react'
import { Layout, Seo } from '../components'

// site.com/404

const NotFoundTemplate = ({ location }) => {
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={`❗Page Not Found❗`} path={pathname} />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundTemplate
