import React from 'react'

import Layout from './LayoutOptionBodyProfile'

export default function OptionBodyProfile (props) {
  return (
    <Layout>
      <p>{props.name}</p>
    </Layout>
  )
}