import React from 'react'

export default function Layout (props) {
  return (
    <div className="container-body-notifications">
      <h3>Notificaciones</h3>
      <div className="list-body-notifications">
        {
          props.children
        }
      </div>
    </div>
  )
}