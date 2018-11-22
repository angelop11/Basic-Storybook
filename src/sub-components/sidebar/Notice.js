import React from 'react'

export default function Notice (props) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        padding: props.size/3,
        position: 'absolute',
        top: props.top,
        right: props.right,
        left: props.left,
        bottom: props.bottom
      }}
    >
      <p
        style={{
          fontSize: props.size
        }}
        className="notice-sidebar"
      >{props.text}</p>
    </div>
  )
}