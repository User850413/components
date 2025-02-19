import clsx from 'clsx'
import { MouseEventHandler } from 'react'

export interface ButtonProps {
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  variants?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'disabled'
  classNames?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  ariaLabel?: string
  disabled?: boolean
}

export default function Button({
  text = 'button',
  onClick = () => {},
  variants = 'default',
  size = 'md',
  classNames,
  ariaLabel = '버튼',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        {
          'bg-primary text-white hover:bg-primary-darker':
            variants === 'primary' && !disabled,
          'bg-secondary text-white hover:bg-secondary-darker':
            variants === 'secondary' && !disabled,
          'bg-tertiary text-primary hover:bg-tertiary-darker':
            variants === 'tertiary' && !disabled,
          'bg-gray-300 text-primary hover:bg-gray-400':
            variants === 'default' && !disabled,
          'cursor-default bg-gray-300 text-gray-400':
            variants === 'disabled' || disabled,
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
