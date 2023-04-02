import styled from 'styled-components'

interface IProps {
  text: string
  clickHandler: () => void
  classes?: string
}

const Button = styled.button`
  box-sizing: border-box;
  text-transform: uppercase;
  /* font-weight: bold; */
  border-radius: 0.5rem;
  padding: 0.5rem;
  /* color: rgb(var(--color-primary-500)); */
  /* background-color: #fff; */
  border: 1px solid rgb(var(--color-surface-100));
  background-color: rgb(var(--color-surface-100));
  transition: color 0.5s, background-color 0.5s, transform 0.5s;
  /* border: 0.25rem solid rgb(var(--color-primary-500)); */

  &:hover {
    border: 1px solid #fff;
    background-color: rgb(var(--color-primary-500));
    color: #fff;
    transform: scale(1.05);
    transition: color 0.5s, background-color 0.5s, transform 0.5s;
  }
`

export default function DocoStylingButton({ text, clickHandler, classes }: IProps) {
  return (
    <Button className={classes} onClick={clickHandler}>
      {text}
    </Button>
  )
}
