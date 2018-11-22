import React, { Component } from 'react'

import Layout from '../sub-components/toolbar/Layout'
import Logo from '../sub-components/toolbar/Logo'
import Menu from '../sub-components/toolbar/Menu'
import Notifications from '../sub-components/toolbar/Notifications'
import Profile from '../sub-components/toolbar/Profile'

export default class Toolbar extends Component {
  render() {
    return (
      <Layout>
        <Logo logo={this.props.logo} />
        <Menu changeActiveSidebar={this.props.changeActiveSidebar} />
        <Notifications
          notifications={this.props.notifications}
          changeActiveNotifications={this.props.changeActiveNotifications}
          notificationsLength={this.props.notificationsLength}
        />
        <Profile
          optionsBodyProfile={this.props.optionsBodyProfile}
          changeActiveBodyProfile={this.props.changeActiveBodyProfile}
          imgProfile={this.props.imgProfile}
        />
      </Layout>
    )
  }
}