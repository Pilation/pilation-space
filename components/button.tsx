interface IProps {
  name: string
  handleChange: (e: any) => void
  classes?: string
}

export function Button(props: IProps) {
  const { name, handleChange, classes } = props

  const buttonClasses = ' ml-4 mt-1 p-4 border border-gray-300  bg-white text-sm font-medium '
  return (
    <button onClick={handleChange} type='button' className={buttonClasses + classes} value='true'>
      {name}
    </button>
  )
}
