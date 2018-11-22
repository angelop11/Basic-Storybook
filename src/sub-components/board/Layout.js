import React from 'react'

import Icon from '../card/Icon'

export default function Layout (props) {
  return (
    <div className="container-board">
      <div className="container-header-board">
        <Icon icon={props.header.icon} />
        <h4 className="title-h4-board">{props.header.title}</h4>
      </div>
      {
        props.children
      }
    </div>
  )
}