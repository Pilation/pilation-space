'use client'

import { faArrowRight, faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../../styles/sections/PrimaryNav/NewPageLink.module.css'

interface INewPageLink {
  to: string
  relationship: 'parent' | 'child'
  css?: React.CSSProperties
}

export default function NewPageLink({ to, relationship, css }: INewPageLink) {
  return (
    <li className={styles.link} style={css}>
      <FontAwesomeIcon icon={faArrowRight} />
      <span>{to}</span>
      <FontAwesomeIcon icon={faArrowsLeftRight} />
      <span>{relationship}</span>
    </li>
  )
}
