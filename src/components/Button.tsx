import clsx from 'clsx'
import { MouseEventHandler } from 'react'

export interface ButtonProps {
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'disabled'
  classNames?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  ariaLabel: string
}

export default function Button({
  text = 'button',
  onClick = () => {},
  type = 'default',
  size = 'md',
  classNames,
  ariaLabel = '버튼',
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        {
          'bg-primary hover:bg-primary-darker text-white': type === 'primary',
          'bg-secondary hover:bg-secondary-darker text-white':
            type === 'secondary',
          'bg-tertiary text-primary hover:bg-tertiary-darker':
            type === 'tertiary',
          'text-primary bg-gray-300 hover:bg-gray-400': type === 'default',
          'cursor-default bg-gray-300 text-gray-400': type === 'disabled',
        },
        'h-fit',
        {
          'h-fit rounded-md px-2 py-1 text-xs': size === 'xs',
          'rounded-md px-3 py-2 text-sm': size === 'sm',
          'text-md rounded-md px-4 py-2': size === 'md',
          'rounded-lg px-4 py-2 text-lg': size === 'lg',
          'rounded-lg px-4 py-2 text-xl': size === 'xl',
          'rounded-xl px-5 py-3 text-2xl': size === '2xl',
        },
        classNames
      )}
    >
      {text}
    </button>
  )
}
