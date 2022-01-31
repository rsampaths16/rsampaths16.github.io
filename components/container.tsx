type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props): JSX.Element {
  return (
    <div className='container mx-32 px-4 py-4 my-4'>
      {children}
    </div>
  )
}
