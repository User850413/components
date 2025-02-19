import CheckBox from '@/components/CheckBox'

export default function CheckBoxPage() {
  return (
    <>
      <CheckBox
        label="안녕하세요"
        gap={10}
        color="primary"
        variants="subtle"
        size="sm"
      />
      <CheckBox
        label="안녕하세요"
        gap={10}
        color="secondary"
        variants="solid"
        size="md"
      />
      <CheckBox
        label="안녕하세요"
        gap={10}
        color="tertiary"
        variants="subtle"
        size="lg"
      />
      <CheckBox
        label="안녕하세요"
        gap={10}
        color="gray"
        variants="outline"
        size="md"
      />
    </>
  )
}
