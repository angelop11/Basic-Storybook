import React, { Component } from 'react';

import Layout from '../sub-components/card/Layout'
import Image from '../sub-components/card/Image'
import Description from '../sub-components/card/Description'


export default class Card extends Component{
  render(){
    return (
      <Layout
        href={this.props.href}
      >
        <Image img={this.props.img} />
        <Description
          title={this.props.title}
          description={this.props.description}
          date={this.props.date}
          href={this.props.href}
        />
      </Layout>
    )
  }
}