import React from 'react'

import Door from './Door'

export default function Layout (props) {


  return (
    <div className={"bg-sidebar-dev"}>
        <div className="container-sidebar">
        {
          props.children
        }
        <Door changeActiveSidebar={props.changeActiveSidebar} />
        </div>
    </div>
  )
}