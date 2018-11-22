import React from 'react';
import { storiesOf } from '@storybook/react';

import Board from '../src/components/Board'
import img from '../src/imgs/card.jpg'


const header = {
  title: "Datos",
  icon: "edit"
}

const list = [
  {
    title: "Procesos de pago1",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago2",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago3",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago4",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago5",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago6",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago7",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  },{
    title: "Procesos de pago8",
    description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
    img: img,
    date: "14 de noviembre",
    href: "#"
  }
]

storiesOf('Board', module)
  .add('Basic', () => (
    <Board header={header} list={list} />
  ))