import cn from 'classnames'

type Props = {
  contentClassName?: string,
  borderClassName?: string
}

export default function Divider({ children, contentClassName, borderClassName } : React.PropsWithChildren<Props>) {
  return (
    <div className='relative flex items-center h-0'>
      <span className={cn('flex-grow', borderClassName)}/>
      <span className={cn('flex-shrink', contentClassName)}> {children} </span>
      <span className={cn('flex-grow', borderClassName)}/>
    </div>
  )
}
