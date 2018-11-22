import React from 'react'

import Layout from '../card/LayoutDescription'
import TextDescription from '../card/TextDescription'
import OptionsDescription from '../card/OptionsDescription'

export default function Description (props) {
  return (
    <Layout>
      <TextDescription title={props.title} description={props.description} />
      <OptionsDescription href={props.href} date={props.date} />
    </Layout>
  )
}