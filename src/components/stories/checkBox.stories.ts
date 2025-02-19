import { Meta, StoryObj } from '@storybook/react'
import CheckBox from '../CheckBox'

const meta = {
  component: CheckBox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'default',
    color: 'gray',
    variants: 'subtle',
    size: 'md',
    disabled: false,
  },
}

export const disabled: Story = {
  args: {
    label: 'disabled',
    color: 'primary',
    variants: 'outline',
    size: 'md',
    disabled: true,
  },
}
