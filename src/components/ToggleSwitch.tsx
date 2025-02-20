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
  disabled?: boolean
  defaultChecked?: boolean
}

export default function ToggleSwitch({
  onChange,
  id,
  ariaLabel,
  classNames,
  size = 'md',
  label,
  gap = 10,
  disabled = false,
  defaultChecked = false,
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)
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
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={buttonId} className="flex w-fit items-center">
        <span
          className={clsx(
            'relative box-border block rounded-full transition-colors',
            { 'cursor-pointer': !disabled },
            {
              'border-primary bg-primary-soft': isChecked && !disabled,
              'border-gray-400 bg-gray-200': !isChecked || disabled,
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
              'absolute box-border rounded-full transition-transform',
              {
                'left-0 bg-gray-400': !isChecked,
                'translate-x-full': isChecked,
              },

              // NOTE : size lg일 때 UI 보완
              {
                'left-1': size !== 'lg' && isChecked,
                'left-[0.4rem]': size === 'lg' && isChecked,
              },
              {
                'bg-primary': isChecked && !disabled,
                'translate-x-full bg-gray-400': defaultChecked && disabled,
              },
              {
                'h-4 w-4': size === 'sm',
                'h-5 w-5': size === 'md',
                'h-[26px] w-[26px]': size === 'lg',
              }
            )}
          />
        </span>
        {label && (
          <p
            style={{ marginLeft: gap }}
            className={clsx({
              'text-sm': size === 'sm',
              'text-md': size === 'md',
              'text-lg': size === 'lg',
            })}
          >
            {label}
          </p>
        )}
      </label>
    </div>
  )
}
