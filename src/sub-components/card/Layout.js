import React from 'react'

export default function Layout (props) {
  return (
    <a href={props.href}>
      <section className="container-card">
        {
          props.children
        }
      </section>
    </a>
  )
}