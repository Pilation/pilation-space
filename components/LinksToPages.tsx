'use client'

import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid black;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 100px;
  transform: translateX(200px);
  transition: transform 0.3s;
  &:hover {
    transform: translateX(0);
    transition: transform 0.3s;
  }
`
const FlexUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
`
const Li = styled.li`
  font-weight: bold;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`

export default function LinksToPages() {
  return (
    <Card>
      <h2>Page Navigation</h2>
      <FlexUl>
        <Link href={'/'} passHref>
          <Li>Index</Li>
        </Link>
        <Link href={'/about'} passHref>
          <Li>About</Li>
        </Link>
        <Link href={'/blog'} passHref>
          <Li>Blog</Li>
        </Link>
        <Link href={'/editor'} passHref>
          <Li>Editor</Li>
        </Link>
        <Link href={'/resourcelist'} passHref>
          <Li>Resourcelist</Li>
        </Link>
        <Link href={'/spaces'} passHref>
          <Li>Spaces</Li>
        </Link>
        <Link href={'/test'} passHref>
          <Li>test</Li>
        </Link>
        <Link href={'/graphs'} passHref>
          <Li>graphs</Li>
        </Link>
      </FlexUl>
    </Card>
  )
}
