import clsx from 'clsx'
import { useId, useState } from 'react'

interface ToggleSwitchProps {
  id?: string
  ariaLabel?: string
  onChange?: (checked: boolean) => void
  classNames?: string
  size?: 'sm' | 'md' | 'lg'
  label?: string
  gap?: number
}

export default function ToggleSwitch({
  onChange,
  id,
  ariaLabel,
  classNames,
  size = 'md',
  label,
  gap,
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const customId = useId()

  const buttonId = id || customId

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          onChange?.(!isChecked)
          setIsChecked((prev) => !prev)
        }}
        id={buttonId}
        name={buttonId}
        aria-label={ariaLabel}
        className="hidden"
      />
      <label htmlFor={buttonId}>
        <span
          className={clsx(
            'relative box-border block cursor-pointer rounded-full transition-colors',
            {
              'border-primary bg-primary-soft': isChecked,
              'border-gray-400 bg-gray-200': !isChecked,
            },
            {
              'h-5 w-10 border-[2px]': size === 'sm',
              'h-6 w-12 border-2': size === 'md',
              'h-8 w-16 border-[3px]': size === 'lg',
            },
            classNames
          )}
        >
          <span
            className={clsx(
              'absolute left-0 box-border rounded-full transition-transform',
              {
                'bg-gray-400': !isChecked,
                'left-1 translate-x-full bg-primary':
                  isChecked && size !== 'lg',
                'left-[0.4rem] translate-x-full bg-primary':
                  isChecked && size === 'lg',
              },
              {
                'h-4 w-4': size === 'sm',
                'h-5 w-5': size === 'md',
                'h-[26px] w-[26px]': size === 'lg',
              }
            )}
          />
        </span>
      </label>
    </div>
  )
}
