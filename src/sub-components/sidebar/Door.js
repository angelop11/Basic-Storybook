import React from 'react'

import Icon from '../card/Icon'

export default function Door (props) {
  return (
    <div className="conte-bottom-btn" onClick={props.changeActiveSidebar}>
      <Icon class="icon-door" color="gray" size="30px" icon="angle-left" />
    </div>
  )
}