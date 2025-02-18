import InputField from '@/components/InputField'

export default function InputFieldPage() {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <InputField
          errorMessage="sm"
          size="sm"
          placeholder="hello"
          defaultValue={'hello'}
        />
      </li>
      <li>
        <InputField
          errorMessage="md"
          size="md"
          defaultValue={'readOnly'}
          readonly
        />
      </li>
      <li>
        <InputField
          errorMessage="lg"
          size="lg"
          type="email"
          disabled
          defaultValue={'disabled'}
        />
      </li>
      <li>
        <InputField
          errorMessage="xl"
          size="xl"
          type="number"
          placeholder="number"
        />
      </li>
    </ul>
  )
}
