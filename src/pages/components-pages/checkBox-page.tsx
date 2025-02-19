import CheckBox from '@/components/CheckBox'

export default function CheckBoxPage() {
  return (
    <ul className="ml-4 mt-4 flex flex-col items-start gap-2">
      <li>
        <CheckBox
          label="안녕하세요"
          gap={10}
          color="primary"
          variants="subtle"
          size="sm"
        />
      </li>
      <li>
        <CheckBox
          label="안녕하세요"
          gap={10}
          color="secondary"
          variants="solid"
          size="md"
        />
      </li>
      <li>
        <CheckBox
          label="안녕하세요"
          gap={10}
          color="tertiary"
          variants="subtle"
          size="lg"
        />
      </li>
      <li>
        <CheckBox
          label="안녕하세요"
          gap={10}
          color="gray"
          variants="outline"
          size="md"
        />
      </li>
      <li>
        <CheckBox
          label="disabled"
          gap={10}
          color="primary"
          variants="subtle"
          size="md"
          disabled
        />
      </li>
    </ul>
  )
}
