import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";

const meta = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive navigation bar with logo and call-to-action section for Consumer Cellular.",
      },
    },
  },
  argTypes: {
    logoSrc: {
      control: "text",
      description: "URL for the logo image",
    },
    phoneNumber: {
      control: "text",
      description: "Phone number to display in the call-to-action",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomPhone: Story = {
  args: {
    phoneNumber: "(555) 123-4567",
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
