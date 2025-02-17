import Button from '@/components/Button'

export default function ButtonPage() {
  const alertMessage = () => {
    window.alert('alert!')
  }

  return (
    <div className="m-5 flex gap-4">
      <Button size="xs" type="primary" text="alert" onClick={alertMessage} />
      <Button size="sm" type="secondary" />
      <Button size="md" type="tertiary" />
      <Button size="lg" type="default" />
      <Button size="xl" type="disabled" />
      <Button size="2xl" type="primary" />
    </div>
  )
}
