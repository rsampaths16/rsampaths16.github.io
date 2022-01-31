import Header from 'components/header/header'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div className='flex flex-col min-h-screen bg-stone-100'>
      <Header/>
      <main className='flex grow'>
        {children}
      </main>
    </div>
  )
}
