import React from 'react';
import { storiesOf } from '@storybook/react';

import Toolbar from '../src/components/Toolbar'
import logo from '../src/imgs/logo-utec.jpg'
import imgProfile from '../src/imgs/perfil.jpg'

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

storiesOf('Toolbar', module)
  .add('Basic', () => (
    <Toolbar optionsBodyProfile={options} notifications={list} notificationsLength={14} logo={logo} imgProfile={imgProfile} />
  ))