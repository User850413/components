import clsx from 'clsx'
import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from 'react'

interface InputFieldProps {
  background?: string
  classnames?: string
  type?: 'text' | 'password' | 'email' | 'number'
  value?: string | number
  defaultValue?: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  maxLength?: number
  autoFocus?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  id?: string
  ariaLabel?: string
  error?: boolean
  errorMessage?: string
  canClear?: boolean
}

export default function InputField({
  background,
  classnames,
  type = 'text',
  value,
  defaultValue = '',
  placeholder = '',
  disabled = false,
  readonly = false,
  maxLength,
  autoFocus,
  size = 'md',
  fullWidth = false,
  onChange,
  onFocus,
  onBlur,
  onKeyPress,
  id,
  ariaLabel,
  error = false,
  errorMessage,
  canClear = true,
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isXRendered, setIsXRendered] = useState<boolean>(
    (type === 'email' || type === 'text') && defaultValue.toString().length > 0
  )

  const onInputChange = () => {
    if (inputRef.current !== null && inputRef.current.value) {
      setIsXRendered(true)
    } else {
      setIsXRendered(false)
    }
  }
  const onClickXButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (inputRef.current !== null) inputRef.current.value = ''
    setIsXRendered(false)
  }
  return (
    <div
      className={clsx(
        { 'w-full': fullWidth, 'max-w-64': !fullWidth },
        'relative flex flex-col items-start'
      )}
    >
      <input
        ref={inputRef}
        type={type}
        style={{ backgroundColor: background }}
        value={value ? value : undefined}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        onChange={(e) => {
          if (onChange) {
            onChange(e)
          }
          onInputChange()
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyPress}
        id={id}
        aria-label={ariaLabel}
        maxLength={maxLength}
        autoFocus={autoFocus}
        className={clsx(
          { 'bg-quaternary': !background },
          { 'bg-gray-200': disabled },
          { 'text-primary-lighter': readonly || disabled },
          { 'border-2 border-alert': error },
          {
            'text-xs': size === 'sm',
            'text-md': size === 'md',
            'text-lg': size === 'lg',
            'text-xl': size === 'xl',
          },
          'box-border w-full rounded-md p-2 text-primary focus:outline-primary',
          classnames
        )}
      />
      {canClear && (type === 'text' || type === 'email') && isXRendered && (
        <button
          onClick={onClickXButton}
          className={clsx(
            {
              'top-[7px] h-[17px] w-[17px] text-xs': size === 'sm',
              'text-md top-[8px] h-[23px] w-[23px]': size === 'md',
              'top-[9px] h-[27px] w-[27px] text-lg':
                size === 'lg' || size === 'xl',
            },
            'absolute right-2 aspect-square rounded-full bg-gray-300 p-0 hover:bg-gray-400'
          )}
        >
          ✖
        </button>
      )}
      {error && errorMessage && <p className="text-alert">{errorMessage}</p>}
    </div>
  )
}
