import Button from '@/components/Button'

export default function ButtonPage() {
  const alertMessage = () => {
    window.alert('alert!')
  }

  return (
    <div className="m-5 flex gap-4">
      <Button
        size="xs"
        variants="primary"
        text="alert"
        onClick={alertMessage}
      />
      <Button size="sm" variants="secondary" />
      <Button size="md" variants="tertiary" />
      <Button size="lg" variants="default" />
      <Button size="xl" variants="disabled" />
      <Button size="2xl" variants="primary" />
    </div>
  )
}
