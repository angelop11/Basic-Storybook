import React, { Component } from 'react'

import Layout from '../sub-components/notifications/Layout'
import Notification from './Notification'

export default class BodyNotifications extends Component{
  render() {
    return (
      <Layout>
        {
          this.props.notifications.map( (notification, i) => (
            <Notification {...notification} key={i} />
          ) )
        }
      </Layout>
    )
  }
}