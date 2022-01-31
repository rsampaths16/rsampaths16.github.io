import Link from 'next/link'

export default function Footer(): JSX.Element {
  const links: string[][] = [
    [ 'LinkedIn', 'https://www.linkedin.com/in/rsampaths16/' ],
    [ 'GitHub', 'https://github.com/rsampaths16' ],
    [ 'Instagram', 'https://www.instagram.com/sampath_xyz/' ],
    [ 'Twitter', 'https://twitter.com/sampath_xyz' ]
  ]

  return (
    <footer className='flex-none flex justify-center px-8 pb-4 pt-5 h-16 bg-stone-50 align-baseline'>
      {links.map(pair => (
        <Link key={pair[0]} href={pair[1]}>
          <a className='px-2 mx-2 text-sm text-rose-800 italic hover:underline'>{pair[0]}</a>
        </Link>
      ))}
    </footer>
  )
}
