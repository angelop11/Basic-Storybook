import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAngleRight,
  faAngleLeft,
  faCalendarAlt,
  faEdit,
  faBullseye,
  faBullhorn,
  faTrophy,
  faComments,
  faCodeBranch,
  faUniversity,
  faBook,
  faFlag,
  faSitemap,
  faQuestionCircle,
  faHandsHelping,
  faBars,
  faBell
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faAngleRight,
  faAngleLeft,
  faCalendarAlt,
  faEdit,
  faBullseye,
  faBullhorn,
  faTrophy,
  faComments,
  faCodeBranch,
  faUniversity,
  faBook,
  faFlag,
  faSitemap,
  faQuestionCircle,
  faHandsHelping,
  faBars,
  faBell
)

export default function Icon (props) {
  return (
    <FontAwesomeIcon
      className={props.class}
      style={{ color: props.color, fontSize:props.size, margin: props.margin }}
      icon={props.icon}
      onClick={props.onClick}
    />
  )
}

