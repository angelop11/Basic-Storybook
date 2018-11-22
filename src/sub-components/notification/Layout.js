import React from 'react'

export default function Layout (props) {
  return (
    <div className="container-body-notification">
      {
        props.children
      }
    </div>
  )
}