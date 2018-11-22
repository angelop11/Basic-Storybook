import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from '../src/components/Card'
import img from '../src/imgs/card.jpg'

storiesOf('Card', module)
  .add('Basic', () => (
    <Card 
      title="Procesos de pago"
      description="Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión."
      img={img}
      date={"14 de noviembre"}
      href="#"
      onClick={action('clicked')}
    />
  ))