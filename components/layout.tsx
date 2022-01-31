import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import Divider from 'components/utils/divider'

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
      <Divider
        contentClassName='mx-2 text-rose-800/[0.25] font-semibold text-xs tracking-tighter align-baseline'
        borderClassName='border-t-4 border-double border-rose-800/[0.25]'
      >
        Hmm
      </Divider>
      <Footer/>
    </div>
  )
}
