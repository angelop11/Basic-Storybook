import React from 'react'

export default function Image (props) {
  return (
    <header className="conte-img-card">
      <img className="img-card" src={props.img} />
    </header>
  )
}