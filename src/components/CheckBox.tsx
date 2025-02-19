import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface CheckBoxProps {
  label?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'gray'
  variants?: 'outline' | 'subtle' | 'solid'
  disabled?: boolean
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
  gap?: number
  checked?: boolean
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
}: CheckBoxProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const checkBoxId = label && 'customCheckBox'

  useEffect(() => {
    console.log(checked ? 'checked!' : 'unchecked!')
  }, [checked])

  const handleClickCheck = () => {
    setChecked((prev) => !prev)
  }

  // NOTE : UI 스타일링 로직
  const variantsClasses = {
    outline: {
      primary: 'border-primary bg-white text-primary hover:bg-gray-50',
      secondary: 'border-secondary bg-white text-secondary hover:bg-gray-50',
      tertiary: 'border-tertiary bg-white text-tertiary hover:bg-gray-50',
      gray: 'border-gray-400 bg-white text-gray-400 hover:bg-gray-50',
    },
    subtle: {
      primary: 'bg-primary-soft text-primary-darker hover:bg-primary',
      secondary: 'bg-secondary-soft text-secondary-darker hover:bg-secondary',
      tertiary: 'bg-tertiary-soft text-tertiary-darker hover:bg-tertiary',
      gray: 'bg-gray-200 text-gray-500 hover:bg-gray-300',
    },
    solid: {
      primary: 'bg-primary text-white hover:bg-primary-darker',
      secondary: 'bg-secondary text-white hover:bg-secondary-darker',
      tertiary: 'bg-tertiary text-white hover:bg-tertiary-darker',
      gray: 'bg-gray-400 text-white hover:bg-gray-600',
    },
  }
  const finalStyleClasses = variantsClasses[variants][color]

  return (
    <>
      <div>
        <input type="checkbox" className="hidden" id={checkBoxId} />
        <label
          htmlFor={checkBoxId}
          className="flex w-fit items-center"
          onClick={handleClickCheck}
        >
          <div
            className={clsx(
              'relative rounded-sm',
              { border: variants === 'outline' },
              {
                'h-5 w-5 rounded-sm': size === 'sm',
                'h-7 w-7 rounded-md': size == 'md',
                'h-9 w-9 rounded-lg': size === 'lg',
              },
              finalStyleClasses
            )}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              o
            </span>
          </div>
          <p style={{ marginLeft: gap }}>{label}</p>
        </label>
      </div>
    </>
  )
}
