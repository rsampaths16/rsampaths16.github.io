import HeaderLogo from './header-logo'

export default function Header(): JSX.Element {
  return (
    <header className='flex-none flex justify-center shadow-xl shadow-rose-800/[0.125] bg-rose-800/[0.25] backdrop-blur sticky top-0 z-50 px-8 py-4'>
      <div className='mr-auto'>
        <HeaderLogo/>
      </div>
    </header>
  )
}
