import React from 'react'

export default function Layout (props) {
  return (
    <div className="container-view">
      {
        props.children
      }
    </div>
  )
}