import { Meta, StoryObj } from '@storybook/react'
import Button from '../button-page'
import { fn } from '@storybook/test'

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
    text: 'button',
  },
}
