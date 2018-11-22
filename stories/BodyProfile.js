import React from 'react';
import { storiesOf } from '@storybook/react';

import BodyProfile from '../src/components/BodyProfile'

const options = [
  {
    name: "Perfil",
    href: "#"
  },
  {
    name: "Mis eventos",
    href: "#"
  },
  {
    name: "Configuración",
    href: "#"
  },
  {
    name: "Salir",
    href: "#"
  }
]

storiesOf('BodyProfile', module)
  .add('Basic', () => (
    <BodyProfile options={options} />
  ))