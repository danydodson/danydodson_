import React from 'react'
import { Layout, Seo } from '../components'

// site.com/resume

const ViewResumeTemplate = ({ location }) => {
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={`📝 Resume `} path={pathname} />
    </Layout>
  )
}

export default ViewResumeTemplate
