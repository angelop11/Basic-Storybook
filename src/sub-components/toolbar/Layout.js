import React from 'react'

export default function Layout (props) {
  return (
    <header className="bg-toolbar">
      <nav className="container-toolbar">
        {
          props.children
        }
      </nav>
    </header>
  )
}