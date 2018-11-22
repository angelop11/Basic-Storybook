import React from 'react'

export default function TextDescription (props) {
  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}