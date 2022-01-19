import React from 'react'
import { Layout, Head } from '../components'
// import { useSiteMetadata } from '../hooks'
// import CV from '../components/CV'

const ResumeTemplate = ({ location }) => {
  // const { author } = useSiteMetadata()
  const { pathname } = location

  return (
    <Layout location={location}>
      <Head title={`📝 Resume `} path={pathname} />

      {/* <CV /> */}
    </Layout>
  )
}

export default ResumeTemplate
