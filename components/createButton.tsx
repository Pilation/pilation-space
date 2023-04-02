'use client'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import styles from '../styles/components/CreateButton.module.css'

interface IcreateButton {
  handleClick: () => void
  style?: React.CSSProperties
}

export default function CreateButton({ handleClick, style }: IcreateButton) {
  const [isActive, setIsActive] = useState(false)
  const clickHandler = () => {
    setIsActive(!isActive)
    handleClick()
  }

  return (
    <button type='button' className={styles.createButton} onClick={clickHandler} style={style}>
      <FontAwesomeIcon icon={faPlus} className={isActive ? ` ${styles.rotatedHalf}` : ''} />
    </button>
  )
}
