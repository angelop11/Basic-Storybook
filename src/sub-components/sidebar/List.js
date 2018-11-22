import React from 'react'

import ChildList from '../sidebar/ChildList'

export default function List (props) {
  return (
    <div className={props.class}>
      <h6>{props.list.name}</h6>
      <ul>
        {
          props.list.content.map( (link, ii) => (
            <ChildList link={link} key={ii} changeActualSidebar={(props.changeActualSidebar) ? props.changeActualSidebar : ''} />
          ) )
        }
      </ul>
    </div>
  )
}