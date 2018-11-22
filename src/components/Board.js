import React, { Component } from 'react'

import Layout from '../sub-components/board/Layout'
import Content from '../sub-components/board/Content'

export default class Board extends Component {
  render() {
    return (
      <Layout
        header={this.props.header}
      >
        <Content list={this.props.list}/>
      </Layout>
    )
  }
}