import React from 'react'

import Icon from '../card/Icon'
import Notice from './Notice'

export default function ChadList (props) {
  return (
    <li>
      <a href={props.link.href} onClick={ (thisa) => {
          if(props.changeActualSidebar!='')
            props.changeActualSidebar(props.link.icon, props.link.name, thisa)
      } }>
        { props.link.icon &&
          <Icon margin="0 8px 0 0" color="gray" size="15px" icon={props.link.icon} />
        }
        {props.link.name}
      </a>
      {
        props.link.notice &&
          <Notice
            bgColor={props.link.notice.color}
            size={props.link.notice.size}
            text={props.link.notice.text}
            top={props.link.notice.top}
            right={props.link.notice.right}
          />
      }
    </li>
  )
}