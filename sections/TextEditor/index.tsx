'use client'

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

// import styled from 'styled-components'
import styles from '../../styles/components/TextEditor.module.css'
import DocoLogger, { ILog } from './DocoLogger'
// import DocoStylingButton from './DocoStylingButton'

// https://javascript.plainenglish.io/how-to-find-the-caret-inside-a-contenteditable-element-955a5ad9bf81

interface IProps {
  classes?: string
}

// const Tab = styled.span`
//   margin-right: 1em;
// `
// styled components
// const DocoWrapper = styled.div`
//   width: 100%;
//   border-radius: 0.5rem;
//   box-sizing: border-box;

//   padding-bottom: 2rem;

//   background-color: rgb(var(--color-primary-500));
// `
// const DocoTextEditor = styled.div`
//   width: 100%;
//   min-height: 500px;

//   background-color: #fff;
//   border-right-width: 1px;
//   border-left-width: 1px;

//   border-color: rgb(var(--color-surface-200));

//   padding: 1rem;
//   &:focus-visible {
//     outline: none;
//   }
// `
// const ButtonsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 1rem;
//   gap: 1rem;
// `

const defaultText =
  'lorem lorem lorem             lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem &Tab lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
const keyWhichChangeCaretPosition = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']

export default function TextEditor({ classes }: IProps) {
  const [logs, setLogs] = useState<ILog[]>([
    {
      text: '',
      key: '',
      keyCode: 0,
      caretCoordinates: {
        x: 0,
        y: 0,
        index: 0,
      },
    },
  ])

  const [textValue, setTextValue] = useState(defaultText)

  const DocoTextEditorRef = useRef<null | HTMLDivElement>(null)

  // to save caret index between rerenders
  const carretIndexRef = useRef({
    index: 0,
  })

  // prevent holding buttom for multiple keypressses. Ref to avoid extra rerenders
  const keyDown = useRef(false)

  const windowChecker = typeof window === 'object'

  const getCaretCoordinates = () => {
    const caretCoordinates = {
      x: 0,
      y: 0,
      index: 0,
    }
    if (!windowChecker) return caretCoordinates
    const selection = window.getSelection() as Selection
    const range = selection.getRangeAt(0)
    const clonedRange = range.cloneRange()
    clonedRange.collapse(true)

    caretCoordinates.x = clonedRange.getClientRects()[0].left
    caretCoordinates.y = clonedRange.getClientRects()[0].top
    caretCoordinates.index = clonedRange.endOffset
    return caretCoordinates
  }

  const placeCaretAfterNewLetter = () => {
    if (!windowChecker) return
    const selection = window.getSelection() as Selection
    const range = selection.getRangeAt(0)
    range.setStart(range.startContainer, carretIndexRef.current.index as number)
    selection.removeAllRanges()
    selection.addRange(range)
  }

  const keyUpHandler = (event: KeyboardEvent) => {
    keyDown.current = false
    setLogs([
      ...logs,
      {
        text: event.currentTarget.textContent as string,
        key: event.key,
        keyCode: event.keyCode,
        caretCoordinates: getCaretCoordinates(),
      },
    ])
  }

  const keyDownHandler = (event: KeyboardEvent) => {
    if (keyDown.current) {
      event.preventDefault()
      return
    }
    keyDown.current = true

    if (keyWhichChangeCaretPosition.find((e) => e === event.key)) return

    carretIndexRef.current.index = getCaretCoordinates().index + 1
    // as text comes from state, each change of text leads to rerender and loss of focus. That's why event should be out of querry and fire after rerender
    setTimeout(() => {
      placeCaretAfterNewLetter()
    }, 0)
  }

  return (
    <>
      <div className={styles.editorWrapper}>
        <div className={styles.editorButtonsContainer}>
          {/* <DocoStylingButton classes={'font-bold'} text={'bold'} clickHandler={() => console.log('bold')} />
          <DocoStylingButton classes={'italic'} text={'italic'} clickHandler={() => console.log('italic')} /> */}
        </div>
        <div
          className={styles.editorBody}
          onClick={() =>
            setLogs([
              ...logs,
              {
                text: logs[logs.length - 1].text,
                key: logs[logs.length - 1].key,
                keyCode: logs[logs.length - 1].keyCode,
                caretCoordinates: getCaretCoordinates(),
              },
            ])
          }
          id='docoTextEditor'
          onKeyUp={(event: KeyboardEvent) => keyUpHandler(event)}
          onKeyDown={(event: KeyboardEvent) => keyDownHandler(event)}
          contentEditable
          suppressContentEditableWarning={true}
          onInput={(e) => {
            console.log(e)
            setTextValue(e.currentTarget.textContent as string)
          }}
          ref={DocoTextEditorRef}
        >
          {textValue}
          {/* {defaultText} */}
        </div>
      </div>
      <DocoLogger logs={logs} />
    </>
  )
}
