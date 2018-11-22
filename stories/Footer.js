import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Footer from '../src/components/Footer'
import logo from '../src/imgs/logo-utec.jpg'

const list = [
  {
    name: "UMA",
    content: [
      {
        name: "Eventos",
        href: "#"
      },
      {
        name: "Oportunidades",
        href: "#"
      },
      {
        name: "Noticias",
        href: "#"
      },
      {
        name: "Destacados",
        href: "#"
      },
      {
        name: "Conversación",
        href: "#"
      },
      {
        name: "Agrupaciones", 
        href: "#"
      }
    ]
  },
  {
    name: "UTEC - LINKS EXTERNOS",
    content: [
      {
        name: "Sistema EDU",
        href: "#"
      },
      {
        name: "Canvas",
        href: "#"
      },
      {
        name: "Reservas",
        href: "#"
      },
      {
        name: "Conecto",
        href: "#"
      }
    ]
  },
  {
    name: "Otros",
    content: [
      {
        name: "Preguntas frecuentes",
        href: "#"
      },
      {
        name: "Ayuda en línea",
        href: "#"
      }
    ]
  }
]

storiesOf('Footer', module)
  .add('Basic', () => (
    <Footer
      description="Bienvenido a UTEC, una universidad lider a nivel mundial, con las mejores carreras."
      logo={logo}
      list={list}
      onClick={action('clicked')} 
    />
  ))
