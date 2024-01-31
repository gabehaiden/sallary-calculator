import { InputHTMLAttributes } from 'react'

type InputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ label, ...rest }: InputProps) {
  return (
    <label className='m-2 flex flex-col items-center'>
      {label}
      <input
        {...rest}
        className='m-2 bg-transparent text-green-600 border-b-2 border-green-600 w-20 focus:outline-none'
      />
    </label>
  )
}