import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '../Button'

const meta = {
  component: Button,
  args: { onClick: fn() },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'primary',
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    text: 'secondary',
    type: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    text: 'tertiary',
    type: 'tertiary',
  },
}

export const Disabled: Story = {
  args: {
    text: 'disabled',
    type: 'disabled',
  },
}
