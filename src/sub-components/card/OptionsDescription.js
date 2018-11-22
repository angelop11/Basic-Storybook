import React from 'react' 

import Icon from './Icon'

export default function OptionsDescription (props) {
  return (
    <div>
      <span>{props.date}</span>
      <Icon class="icon" icon="angle-right" />
    </div>
  )
}