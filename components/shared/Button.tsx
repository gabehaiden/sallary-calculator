import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  title: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className='p-2 text-white bg-green-400 rounded hover:bg-green-500 transition-all duration-500'
    >
      {title}
    </button>
  )
}