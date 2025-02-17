import { MouseEventHandler } from 'react'

export interface ButtonProps {
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  text = 'button',
  onClick = () => {},
}: ButtonProps) {
  return <button onClick={onClick}>{text}</button>
}
