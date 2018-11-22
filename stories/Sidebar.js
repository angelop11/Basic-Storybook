import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Sidebar from '../src/components/Sidebar'

const list = [
  {
    name: "UMA",
    content: [
      {
        name: "Eventos",
        icon: "calendar-alt",
        href: "#"
      },
      {
        name: "Datos",
        icon: "edit",
        href: "#"
      },
      {
        name: "Oportunidades",
        icon: "bullseye",
        href: "#"
      },
      {
        name: "Noticias",
        icon: "bullhorn",
        href: "#"
      },
      {
        name: "Destacados",
        icon: "trophy",
        href: "#"
      },
      {
        name: "Conversación",
        icon: "comments",
        href: "#"
      },
      {
        name: "Agrupaciones", 
        icon: "code-branch",
        href: "#",
        notice: {
            text: "Soon",
            color: "#4398ff",
            size: 10,
            top: 10,
            right: 10
          }
      }
    ]
  },
  {
    name: "UTEC - LINKS EXTERNOS",
    content: [
      {
        name: "Sistema EDU",
        icon: "university",
        href: "#"
      },
      {
        name: "Canvas",
        icon: "book",
        href: "#"
      },
      {
        name: "Reservas",
        icon: "flag",
        href: "#"
      },
      {
        name: "Conecto",
        icon : "sitemap",
        href: "#"
      }
    ]
  },
  {
    name: "Otros",
    content: [
      {
        name: "Preguntas frecuentes",
        icon: "question-circle",
        href: "#"
      },
      {
        name: "Ayuda en línea",
        icon: "hands-helping",
        href: "#"
      }
    ]
  }
]


storiesOf('Sidebar', module)
  .add('Basic', () => (
    <Sidebar
      mod='dev'
      list={list}
      onClick={action('clicked')}
    />
  ))