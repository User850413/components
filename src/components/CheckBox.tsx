import clsx from 'clsx'
import { useRef, useState } from 'react'

import Check from '@/assets/check'

interface CheckBoxProps {
  label?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'gray'
  variants?: 'outline' | 'subtle' | 'solid'
  disabled?: boolean
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
  gap?: number
  checked?: boolean
  name?: string
}

export default function CheckBox({
  label = '',
  color = 'gray',
  variants = 'outline',
  disabled = false,
  readonly = false,
  size = 'md',
  gap = 15,
  checked: defaultChecked = false,
  name,
}: CheckBoxProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [checked, setChecked] = useState(defaultChecked)
  const checkBoxId = name

  // NOTE : UI 스타일링 로직
  const checkedClasses = {
    outline: {
      primary: 'border-primary bg-white text-primary hover:bg-gray-50',
      secondary: 'border-secondary bg-white text-secondary hover:bg-gray-50',
      tertiary: 'border-tertiary bg-white text-tertiary hover:bg-gray-50',
      gray: 'border-gray-400 bg-white text-gray-400 hover:bg-gray-50',
    },
    subtle: {
      primary: 'bg-primary-soft text-primary-darker hover:bg-primary-lighter',
      secondary:
        'bg-secondary-soft text-secondary-darker hover:bg-secondary-lighter',
      tertiary:
        'bg-tertiary-soft text-tertiary-darker hover:bg-tertiary-lighter',
      gray: 'bg-gray-200 text-gray-500 hover:bg-gray-300',
    },
    solid: {
      primary: 'bg-primary text-white hover:bg-primary-darker',
      secondary: 'bg-secondary text-white hover:bg-secondary-darker',
      tertiary: 'bg-tertiary text-white hover:bg-tertiary-darker',
      gray: 'bg-gray-400 text-white hover:bg-gray-600',
    },
  }

  const unCheckedClasses = {
    outline: {
      primary: 'border-gray-400',
      secondary: 'border-gray-400',
      tertiary: 'border-gray-400',
      gray: 'border-gray-400',
    },
    subtle: {
      primary: 'bg-primary-soft',
      secondary: 'bg-secondary-soft',
      tertiary: 'bg-tertiary-soft',
      gray: 'bg-gray-300',
    },
    solid: {
      primary: 'border border-gray-400',
      secondary: 'border border-gray-400',
      tertiary: 'border border-gray-400',
      gray: 'border border-gray-400',
    },
  }

  const finalCheckedStyleClasses = checkedClasses[variants][color]
  const finalUnCheckedStyleClasses = unCheckedClasses[variants][color]

  return (
    <>
      <div className="box-border">
        <input
          ref={inputRef}
          type="checkbox"
          className="hidden"
          id={checkBoxId}
          checked={checked}
          name={name}
          disabled={disabled}
          readOnly={readonly}
          onChange={() => {
            setChecked((prev) => !prev)
          }}
        />
        <label htmlFor={checkBoxId} className="flex w-fit items-center">
          <div
            className={clsx(
              'relative rounded-sm',
              { border: variants === 'outline' },
              {
                'h-5 w-5 rounded-sm': size === 'sm',
                'h-7 w-7 rounded-md': size == 'md',
                'h-9 w-9 rounded-lg': size === 'lg',
              },
              {
                'cursor-pointer': !disabled && !readonly,
              },
              `${checked ? finalCheckedStyleClasses : finalUnCheckedStyleClasses}`
            )}
          >
            {checked && (
              <span className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
                <Check />
              </span>
            )}
          </div>
          <p style={{ marginLeft: gap }}>{label}</p>
        </label>
      </div>
    </>
  )
}
