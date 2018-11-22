import React, { Component } from 'react';

import Layout from '../sub-components/footer/Layout'
import Aside from '../sub-components/footer/Aside'
import Lists from '../sub-components/footer/Lists'

export default class Footer extends Component {
  render() {
    return (
      <Layout>
        <Aside logo={this.props.logo} description={this.props.description}/>
        <Lists list={this.props.list}/>
      </Layout>
    )
  }
}