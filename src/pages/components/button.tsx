import { MouseEventHandler } from 'react'

export interface ButtonProps extends HTMLButtonElement {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>
}
