import clsx from 'clsx'
import { useEffect, useState } from 'react'

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
  const outlineStyles = Object.fromEntries(
    COLORS.map((color) => [
      color,
      `border-${color}-400 bg-white text-${color}-400`,
    ])
  )
  const subtleStyles = Object.fromEntries(
    COLORS.map((color) => [color, `bg-${color}-200 text-${color}-500`])
  )
  const solidStyles = Object.fromEntries(
    COLORS.map((color) => [color, `bg-${color}-400 text-white`])
  )
  const variantsClasses = {
    outline: outlineStyles,
    subtle: subtleStyles,
    solid: solidStyles,
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
              'relative h-7 w-7 rounded-md',
              { border: variants === 'outline' },
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
