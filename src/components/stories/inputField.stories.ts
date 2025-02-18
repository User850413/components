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
    defaultValue: 'hello',
    type: 'text',
    size: 'md',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'disabled',
    disabled: true,
    size: 'sm',
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 'read only',
    readonly: true,
    size: 'lg',
  },
}

export const NumberState: Story = {
  args: {
    type: 'number',
    size: 'xl',
  },
}

export const ErrorState: Story = {
  args: {
    error: true,
    errorMessage: 'ERROR!',
    size: 'md',
  },
}
