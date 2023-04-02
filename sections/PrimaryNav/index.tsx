'use client'

import { useEffect, useState } from 'react'

import CreateButton from '../../components/createButton'
import { IPage } from '../../pages/api/organizations/[uuid]/pages'
// styles
import styles from '../../styles/sections/PrimaryNav/PrimaryNav.module.css'
import Collapse from './../../components/Collapse/index'
import Element, { IPagesForMenu, IPagesForMenuLink } from './Element'
import NewPageForm, { IPagesForSelect } from './NewPageForm'
interface IPrimaryNav {
  pages: IPage[]
  css?: React.CSSProperties
}

interface IModifiedPages {
  pagesForMenu: IPagesForMenu[] | []
  pagesForSelect: IPagesForSelect[] | []
}

export default function PrimaryNav({ pages, css }: IPrimaryNav) {
  const [currentElementIndex, setCurrentelementIndex] = useState<null | number>(null)
  const [createPageIsActive, setCreatePageIsActive] = useState(false)

  // copy of page array for modifications
  const [pagesCopy, setPagesCopy] = useState<IPage[]>(JSON.parse(JSON.stringify(pages)))
  // modified copies of page array
  const [modifiedPages, setModifiedPages] = useState<IModifiedPages>({
    pagesForMenu: [],
    pagesForSelect: [],
  })

  const onClickNavElement = (index: number) => {
    setCurrentelementIndex(index)
  }
  const onClickCreateButton = () => {
    setCreatePageIsActive(!createPageIsActive)
    console.log('CreateButton clicked')
  }

  const onSubmit = (newPage: IPage) => {
    setPagesCopy([...pagesCopy, newPage])
  }

  const onDelete = (pageId: string, pageIndex: number) => {
    const arrWithoutRemovedElement = pagesCopy.filter((page, index) => {
      if (index !== pageIndex) return page
    })
    setPagesCopy(arrWithoutRemovedElement)
  }

  useEffect(() => {
    const pagesForSelect: IPagesForSelect[] = []
    const pagesForMenu = pagesCopy.map((page) => {
      pagesForSelect.push({ id: page.id, name: page.name })
      const links = page.links
        ? (page.links.map((link) => {
            return {
              target: pages.find((e) => e.id === link.target)?.name || 'not found',
              value: link.value,
            }
          }) as IPagesForMenuLink[])
        : []

      const result = links.length > 0 ? { ...page, links: links } : page
      return result
    })
    setModifiedPages({
      pagesForMenu: pagesForMenu as IPagesForMenu[],
      pagesForSelect: pagesForSelect as IPagesForSelect[],
    })
  }, [pagesCopy, pages])

  return (
    <nav className={styles.nav}>
      <div className={styles.navButtonsContainer}>
        <div className={styles.navButtonsContainerTop} />
        <CreateButton
          handleClick={onClickCreateButton}
          style={{ alignSelf: 'flex-end', position: 'absolute', right: '0.5rem', top: '8px' }}
        />
        <div className={styles.navButtonsCollapseContainer}>
          <Collapse isOpen={createPageIsActive}>
            <NewPageForm pagesForSelect={modifiedPages.pagesForSelect} submitAction={onSubmit} />
          </Collapse>
        </div>
        <div className={styles.navButtonsContainerBottom} />
      </div>

      <ul className={styles.navList}>
        {modifiedPages.pagesForMenu.map((page, index) => (
          <Element
            key={index}
            page={page}
            handleDelete={() => onDelete(page.id, index)}
            handleClick={() => onClickNavElement(index)}
            active={currentElementIndex === index ? true : false}
          />
        ))}
      </ul>
    </nav>
  )
}
