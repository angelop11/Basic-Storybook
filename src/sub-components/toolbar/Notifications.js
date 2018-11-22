import React, { PureComponent } from 'react'

import Icon from '../card/Icon'
import BodyNotifications from '../../components/BodyNotifications'

export default class Notifications extends PureComponent {
  render(){
    return (
      <div className="conte-notifications-toolbar">
        {
          this.props.notificationsLength > 0 &&
            <span onClick={this.props.changeActiveNotifications} className="notifications-length-toolbar">{this.props.notificationsLength}</span>
        }
        <Icon onClick={this.props.changeActiveNotifications} class="icon-nofitifications-toolbar" icon="bell" color="gray" size="22px" />
        <BodyNotifications notifications={this.props.notifications} />
      </div>
    )
  }
}