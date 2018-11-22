import React from 'react'

import Icon from '../card/Icon'

export default function Menu (props) {
  return (
    <div className="conte-icon-bars" onClick={props.changeActiveSidebar} >
      <Icon icon="bars" color="gray" size="24px" />
    </div>
  )
}