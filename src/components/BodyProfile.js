import React, { Component } from 'react'

import Layout from '../sub-components/toolbar/LayoutBodyProfile'
import OptionBodyProfile from '../sub-components/toolbar/OptionBodyProfile'

export default class BodyProfile extends Component {
  render() {
    return (
      <Layout>
        {
          this.props.options.map( (option, i) => (
            <OptionBodyProfile {...option} key={i} />
          )  )
        }
      </Layout>
    )
  }
}