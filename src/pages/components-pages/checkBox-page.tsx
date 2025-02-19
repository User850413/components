import CheckBox from '@/components/CheckBox'

export default function CheckBoxPage() {
  return (
    <ul className="ml-4 mt-4 flex flex-col items-start gap-2">
      <li>
        <CheckBox
          label="첫 번째 버튼"
          name="첫 번째 버튼"
          gap={10}
          color="primary"
          variants="outline"
          size="sm"
        />
      </li>
      <li>
        <CheckBox
          label="두 번째 버튼"
          name="두 번째 버튼"
          gap={10}
          color="secondary"
          variants="solid"
          size="md"
        />
      </li>
      <li>
        <CheckBox
          label="세 번째 버튼"
          name="세 번째 버튼"
          gap={10}
          color="tertiary"
          variants="subtle"
          size="lg"
        />
      </li>
      <li>
        <CheckBox
          label="네 번째 버튼"
          name="네 번째 버튼"
          gap={10}
          color="gray"
          variants="outline"
          size="md"
        />
      </li>
      <li>
        <CheckBox
          label="다섯 번째 버튼"
          name="다섯 번째 버튼"
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
