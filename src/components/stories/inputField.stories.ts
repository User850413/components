import { Meta, StoryObj } from '@storybook/react'
import InputField from '../InputField'

const meta = {
  component: InputField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    placeholder: 'hello',
    type: 'text',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'disabled',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 'read only',
    readonly: true,
  },
}
