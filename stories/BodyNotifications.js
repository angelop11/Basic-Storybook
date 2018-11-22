import React from 'react';
import { storiesOf } from '@storybook/react';

import BodyNotifications from '../src/components/BodyNotifications'

const list = [
  {
    topic: "Eventos1",
    title: "No te pierdas el evento que se realizara en el campus de Barranco. Pasa la voz a todos tus amigos.",
    date: "Hace 2 días"
  },
  {
    topic: "Eventos2",
    title: "No te pierdas el evento que se realizara en el campus de Barranco. Pasa la voz a todos tus amigos.",
    date: "Hace 2 días"
  },
  {
    topic: "Eventos3",
    title: "No te pierdas el evento que se realizara en el campus de Barranco. Pasa la voz a todos tus amigos.",
    date: "Hace 2 días"
  },
  {
    topic: "Eventos4",
    title: "No te pierdas el evento que se realizara en el campus de Barranco. Pasa la voz a todos tus amigos.",
    date: "Hace 2 días"
  },
  {
    topic: "Eventos5",
    title: "No te pierdas el evento que se realizara en el campus de Barranco. Pasa la voz a todos tus amigos.",
    date: "Hace 2 días"
  }
]

storiesOf('BodyNotifications', module)
  .add('Basic', () => (
    <BodyNotifications notifications={list} />
  ))