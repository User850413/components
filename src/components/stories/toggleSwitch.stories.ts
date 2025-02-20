import { Meta, StoryObj } from '@storybook/react'
import ToggleSwitch from '../ToggleSwitch'

const meta = {
  component: ToggleSwitch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>

export default meta
type Story = StoryObj<typeof ToggleSwitch>

export const Default: Story = {
  args: {
    size: 'md',
    label: 'toggle switch',
    gap: 10,
  },
}

export const DisabledState: Story = {
  args: {
    size: 'md',
    label: 'disabled',
    disabled: true,
    defaultChecked: true,
  },
}
