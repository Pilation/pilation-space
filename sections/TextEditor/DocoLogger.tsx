'use client'

// import Link from 'next/link'
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

// import styled from 'styled-components'
import styles from '../../styles/components/TextEditor.module.css'

export interface ILog {
  text: string
  key: string
  keyCode: number
  caretCoordinates: {
    x: number
    y: number
    index: number
  }
}
interface IProps {
  logs: ILog[]
}

// const Card = styled.div`
//   border-radius: 20px;
//   background-color: #fff;
//   border: 1px solid black;
//   padding: 1em;
//   position: fixed;

//   right: 0;
//   top: 1em;
//   transform: translateX(200px);
//   transition: transform 0.3s;
//   // &:hover {
//   //   transform: translateX(100px);
//   //   transition: transform 0.3s;
//   // }
//   &.opened {
//     transform: translateX(0);
//     transition: transform 0.3s;
//   }
// `
// const LogsBox = styled.div`
//   width: 220px;
//   height: 220px;
//   overflow-y: auto;
// `

// const FlexUl = styled.ul`
//   display: flex;
//   flex-direction: column;
//   margin-top: 1em;
// `
// const Li = styled.li`
//   padding: 0.5em 0;
//   font-weight: bold;
//   width: 100%;
//   /* transition: transform 0.3s;
//   &:hover {
//     transform: scale(1.1);
//     transition: transform 0.3s;
//   } */
// `
// const Divider = styled.div`
//   margin-bottom: 0.25em;
//   width: 100%;
//   border-radius: 0.5em;
//   height: 2px;
//   /* margin-bottom: 0.5em; */
//   background-color: #000;
// `
// const CloseButton = styled.button`
//   position: absolute;
//   left: -2rem;
//   top: 0;
//   border-radius: 50%;
//   width: 2rem;
//   height: 2rem;
//   outline: none;
//   background-color: #fff;
//   border: 0.25rem solid #000;
//   color: #000;
//   font-size: 1rem;
//   line-height: normal;
// `

export default function DocoLogger({ logs }: IProps) {
  const [opened, setOpened] = useState(false)
  const [scrolldownLogs, setScrolldownLogs] = useState(true)
  const last = useRef<null | HTMLLIElement>(null)

  useEffect(() => {
    const scrollDown = setInterval(() => setScrolldownLogs(!scrolldownLogs), 300)
    return () => {
      clearInterval(scrollDown)
    }
  }, [])

  if (last.current) {
    last.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setOpened(false)
  }
  return (
    <div onClick={() => setOpened(true)} className={styles.loggerCard + (opened ? ' opened' : '')}>
      <h2>Logs</h2>
      <div className={styles.loggerBox}>
        <ul className={styles.loggerList}>
          {logs.map((log, index) => (
            <li className={styles.loggerElement} key={index}>
              <div className={styles.divider} />
              <p>
                #: {index}; key: {log.key}; code: {log.keyCode};
              </p>
              <p>index: {log.caretCoordinates.index}</p>
              {/* for full text */}
              {/* <p>text: {log.text}</p> */}
            </li>
          ))}
          <li className={styles.loggerElement} ref={last}></li>
        </ul>
      </div>
      {opened && (
        <button className={styles.loggerCloseButton} onClick={handleClose}>
          X
        </button>
      )}
    </div>
  )
}
