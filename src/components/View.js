import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Layout from '../sub-components/view/Layout'

import logo from '../imgs/logo-utec.jpg'
import imgProfile from '../imgs/perfil.jpg'
import img from '../imgs/card.jpg'

export default class View extends Component {

  changeActiveSidebar = () => {
    this.setState({
      activeSidebar: !this.state.activeSidebar
    }, () => {
      if(this.state.activeSidebar){
        document.querySelector('.bg-sidebar-dev').classList.remove('class-shrink-sidebar')
        document.querySelector('.container-board').classList.remove('class-grow-board')
      }else{
        document.querySelector('.container-board').classList.add('class-grow-board')
        document.querySelector('.bg-sidebar-dev').classList.add('class-shrink-sidebar')
      }
    })

  }

  changeActualSidebar = (icon, name, element) => {
    this.setState({
      headerBoard: {
        title: name,
        icon: icon
      }
    })
    let lis = document.querySelectorAll('.container-sidebar li')
    for(let i=0; i<lis.length; i++){
      lis[i].classList.remove('li-active')
    }
    element.currentTarget.parentNode.classList.add('li-active')
  }

  changeActiveNotifications = () => {
    console.log(this.state.activeBodyProfile, this.state.activeNotifications)
    if(this.state.activeBodyProfile){
      console.log("cambia profi", this.state.activeBodyProfile)
      this.setState({
        activeBodyProfile: false
      }, () => {
        document.querySelector('.container-body-profile').classList.toggle('body-profile-active')
      })
    }

    this.setState({
      activeNotifications: !this.state.activeNotifications
    }, () => {
      document.querySelector('.container-body-notifications').classList.toggle('notifications-active')
    })
  }

  changeActiveBodyProfile = () => {
    console.log(this.state.activeNotifications, this.state.activeBodyProfile)
    if(this.state.activeNotifications){
      console.log("cambia noti", this.state.activeNotifications)
      this.setState({
        activeNotifications: false
      }, () => {
        document.querySelector('.container-body-notifications').classList.toggle('notifications-active')
      })
    }

    this.setState({
      activeBodyProfile: !this.state.activeBodyProfile
    }, () => {
      document.querySelector('.container-body-profile').classList.toggle('body-profile-active')
    })
  }

  state = {

    listBoard : [
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
      },{
        title: "Procesos de pago9",
        description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
        img: img,
        date: "14 de noviembre",
        href: "#"
      },{
        title: "Procesos de pago10",
        description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
        img: img,
        date: "14 de noviembre",
        href: "#"
      },{
        title: "Procesos de pago11",
        description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
        img: img,
        date: "14 de noviembre",
        href: "#"
      },{
        title: "Procesos de pago12",
        description: "Con el fin de mejorar tu experiencia en UTEC, te presentamos 2 opciones que agilizan el proceso de pago de tu matricula y pensión.",
        img: img,
        date: "14 de noviembre",
        href: "#"
      }
    ],
    headerBoard : {
      title: "Eventos",
      icon: "calendar-alt"
    },
    listSidebar : [
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
    ],
    listFooter : [
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
    ],
    notifications : [
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
    ],
    optionsBodyProfile: [
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
    ],
    activeSidebar: true,
    activeNotifications: false,
    activeBodyProfile: false,
    notificationsLength: 14
  }

  componentDidMount(){
    let lis = document.querySelectorAll('.container-sidebar li')
    lis[0].classList.add('li-active')
  }

  render() {
    return (
      <Layout>
        <Toolbar
          notifications={this.state.notifications}
          changeActiveNotifications={this.changeActiveNotifications}
          changeActiveBodyProfile={this.changeActiveBodyProfile}
          optionsBodyProfile={this.state.optionsBodyProfile}
          notificationsLength={this.state.notificationsLength}
          changeActiveSidebar={this.changeActiveSidebar}
          logo={logo}
          imgProfile={imgProfile}
        />
        <Body 
          mod='dev'
          listSidebar={this.state.listSidebar}
          headerBoard={this.state.headerBoard}
          listBoard={this.state.listBoard}
          activeSidebar={this.state.activeSidebar}
          changeActiveSidebar={this.changeActiveSidebar}
          changeActualSidebar={this.changeActualSidebar}
        />
        <Footer
          description="Bienvenido a UTEC, una universidad lider a nivel mundial, con las mejores carreras."
          logo={logo}
          list={this.state.listFooter}
        />
      </Layout>
    )
  }
}