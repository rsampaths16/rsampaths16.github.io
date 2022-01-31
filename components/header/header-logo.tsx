import Link from 'next/link'

export default function HeaderLogo(): JSX.Element {
  return (
    <Link href='/'>
      <a className='text-black font-semibold underline decoration-double'>
        <div>
          Sampath
        </div>
      </a>
    </Link>
  )
}
