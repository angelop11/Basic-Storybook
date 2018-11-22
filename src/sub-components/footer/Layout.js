import React from 'react'

export default function Layout (props) {
  return (
    <footer className="bg-footer">
        <div className="container-footer" >
        {
          props.children
        }
        </div>
    </footer>
  )
}