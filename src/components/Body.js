import React, { Component } from 'react'

import Layout from '../sub-components/body/Layout'
import Sidebar from './Sidebar'
import Board from './Board'

export default class Body extends Component{
  render() {
    return (
      <Layout>
        <Sidebar changeActualSidebar={this.props.changeActualSidebar} changeActiveSidebar={this.props.changeActiveSidebar} mod={this.props.mod} list={this.props.listSidebar} />
        <Board header={this.props.headerBoard} list={this.props.listBoard} />
      </Layout>
    )
  }
}