import ToggleSwitch from '@/components/ToggleSwitch'

export default function ToggleSwitchPage() {
  return (
    <>
      <ToggleSwitch size="sm" label="안녕하세요" />
      <ToggleSwitch label="안녕하세요" defaultChecked />
      <ToggleSwitch size="lg" label="안녕하세요" />
      <ToggleSwitch size="md" label="disabled" disabled defaultChecked />
    </>
  )
}
