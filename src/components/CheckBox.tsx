import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'sky',
  'blue',
  'purple',
  'pink',
  'gray',
] as const

interface CheckBoxProps {
  label?: string
  color?: (typeof COLORS)[number]
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
      red: 'border-red-400 bg-white text-red-400',
      orange: 'border-orange-400 bg-white text-orange-400',
      yellow: 'border-yellow-400 bg-white text-yellow-400',
      green: 'border-green-400 bg-white text-green-400',
      sky: 'border-sky-400 bg-white text-sky-400',
      blue: 'border-blue-400 bg-white text-blue-400',
      purple: 'border-purple-400 bg-white text-purple-400',
      pink: 'border-pink-400 bg-white text-pink-400',
      gray: 'border-gray-400 bg-white text-gray-400',
    },
    subtle: {
      red: 'bg-red-200 text-red-500',
      orange: 'bg-orange-200 text-orange-500',
      yellow: 'bg-yellow-200 text-yellow-500',
      green: 'bg-green-200 text-green-500',
      sky: 'bg-sky-200 text-sky-500',
      blue: 'bg-blue-200 text-blue-500',
      purple: 'bg-purple-200 text-purple-500',
      pink: 'bg-pink-200 text-pink-500',
      gray: 'bg-gray-200 text-gray-500',
    },
    solid: {
      red: 'bg-red-400 text-white',
      orange: 'bg-orange-400 text-white',
      yellow: 'bg-yellow-400 text-white',
      green: 'bg-green-400 text-white',
      sky: 'bg-sky-400 text-white',
      blue: 'bg-blue-400 text-white',
      purple: 'bg-purple-400 text-white',
      pink: 'bg-pink-400 text-white',
      gray: 'bg-gray-400 text-white',
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
            className={twMerge(
              clsx(
                'relative h-7 w-7 rounded-md',
                { border: variants === 'outline' },
                finalStyleClasses
              )
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
