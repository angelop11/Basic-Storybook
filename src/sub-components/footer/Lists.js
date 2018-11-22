import React from 'react'

import List from '../sidebar/List'

export default function Lists (props){
  return (
    <div className="sub-conta-2-footer">
      {
      props.list == "" ? 
        <p>no hay contenido</p>
      :
        props.list.map( (list, i) =>(
          <List list={list} key={i} content={list.content} />
        ) )
      }
    </div>
  )
}