import React from 'react'

export default function Aside (props) {
  return (
    <div className="sub-conta-1-footer">
      <img src={props.logo} />
      <p>{props.description}</p>
    </div>
  )
}