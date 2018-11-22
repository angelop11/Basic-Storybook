import React from 'react'

import Card from '../../components/Card'

export default function Content (props) {
  return (
    <ul className="content-ul-board">
      {
        props.list.map( (card, i) => (
          <li key={i}>
            <Card {...card}/>
          </li>
        ) )
      }
    </ul>
  )
}