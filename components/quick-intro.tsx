type Props = {
  avatarUrl: string,
  greeting: string,
  caption: string,
  introLines: string[],
  postScript: string
}


export default function QuickIntro({ avatarUrl, greeting, caption, introLines, postScript }: Props): JSX.Element {
  return (
    <div className='flex flex-col text-center p-8'>
      <div className='flex justify-center'>
        <img
          className='h-64 w-64 rounded-full object-cover object-center ring-1 ring-rose-400 ring-offset-2 hover:ring-offset-4 ring-offset-rose-200'
          src={avatarUrl}
          alt='Avatar Image'
        />
      </div>
      <br/>
      <h1 className='text-6xl'>{greeting}</h1>
      <h2 className='text-md'>{caption}</h2>
      <br/>
      <p className='text-2xl'>
        {introLines.map(current => <>{current}</>).reduce((prev, next) => (<>{prev}<br/>{next}</>))}
      </p>
      <br/>
      <p className='text-xs'>{postScript}</p>
    </div>
  )
}

