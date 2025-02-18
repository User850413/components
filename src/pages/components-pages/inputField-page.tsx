import InputField from '@/components/InputField'

export default function InputFieldPage() {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <InputField errorMessage="sm" size="sm" defaultValue={'hi'} />
      </li>
      <li>
        <InputField errorMessage="md" size="md" defaultValue={5} />
      </li>
      <li>
        <InputField
          errorMessage="lg"
          size="lg"
          type="email"
          defaultValue={'hi'}
        />
      </li>
      <li>
        <InputField errorMessage="xl" size="xl" defaultValue={'hi'} />
      </li>
    </ul>
  )
}
