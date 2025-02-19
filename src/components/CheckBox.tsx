interface CheckBoxProps {
  label?: string
  color?:
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
  variants?: 'outline' | 'subtle' | 'solid'
  disabled?: boolean
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
  gap?: number
}

export default function CheckBox({
  label = '',
  color = 'gray',
  variants = 'outline',
  disabled = false,
  readonly = false,
  size = 'md',
  gap = 15,
}: CheckBoxProps) {
  return (
    <>
      <input type="checkbox" />
    </>
  )
}
