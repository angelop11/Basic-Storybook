import React, { Component } from 'react'

import Layout from '../sub-components/notification/Layout'
import Icon from '../sub-components/card/Icon'

export default class Notification extends Component {
  render() {
    return (
      <Layout>
        <h6>{this.props.topic}</h6>
        <p>{this.props.title}</p>
        <Icon class="icon-body-notification" icon="calendar-alt"/>
        <span>{this.props.date}</span>
      </Layout>
    )
  }
}