import React, { Component } from 'react'

import BodyProfile from '../../components/BodyProfile'

export default class Profile extends Component {
  render() {
    return (
      <div className="conte-profile-toolbar" onClick={this.props.changeActiveBodyProfile}>
        <img src={this.props.imgProfile} />
        <BodyProfile options={this.props.optionsBodyProfile} />
      </div>
    )
  }
}