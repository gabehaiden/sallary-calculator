import { ReactNode } from 'react'

type FlexProps = {
  children: ReactNode
  isRow?: boolean
}

export default function Flex({ children, isRow = false }: FlexProps) {

  const style = `flex flex-${isRow ? 'row' : 'col'} justify-center items-center`

  return (
    <div className={style}>
      {children}
    </div>
  )
}