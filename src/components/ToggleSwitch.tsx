import clsx from 'clsx'
import { useId, useState } from 'react'

interface ToggleSwitchProps {
  id?: string
  ariaLabel?: string
  onChange?: (checked: boolean) => void
  classNames?: string
}

export default function ToggleSwitch({
  onChange,
  id,
  ariaLabel,
  classNames,
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
            'relative box-border block h-6 w-12 cursor-pointer rounded-full transition-colors',
            {
              'border-2 border-primary bg-primary-soft': isChecked,
              'border-2 border-gray-400 bg-gray-200': !isChecked,
            },
            classNames
          )}
        >
          <span
            className={clsx(
              'absolute left-0 box-border h-5 w-5 rounded-full transition-transform',
              {
                'bg-gray-400': !isChecked,
                'left-1 translate-x-full bg-primary': isChecked,
              }
            )}
          />
        </span>
      </label>
    </div>
  )
}
