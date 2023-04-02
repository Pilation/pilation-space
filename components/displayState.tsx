export const DisplayState = (props: any) => {
  const { values } = props

  return (
    <div style={{ margin: '1rem 0' }}>
      <h3 style={{ fontFamily: 'monospace' }} />
      <pre
        style={{
          background: '#f6f8fa',
          fontSize: '.65rem',
          padding: '.5rem',
        }}
      >
        {JSON.stringify(values, null, 2)}
      </pre>
    </div>
  )
}
