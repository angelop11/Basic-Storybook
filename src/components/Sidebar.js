import React, { Component } from 'react';

import Layout from '../sub-components/sidebar/Layout'
import List from '../sub-components/sidebar/List'

export default class Sidebar extends Component {
  render() {
    return (
      <Layout
        changeActiveSidebar={this.props.changeActiveSidebar}
        changeActualSidebar={this.props.changeActualSidebar}
        mod={this.props.mod}
      >
        {
          this.props.list == "" ? 
            <p>no hay contenido</p>
          :
            this.props.list.map( (list, i) =>(
              <List class="sub-conte-sidebar" list={list} key={i} changeActualSidebar={this.props.changeActualSidebar}/>
            ) )
        }
      </Layout>
    )
  }
}