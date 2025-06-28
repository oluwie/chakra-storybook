import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";

const meta = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component for displaying service information with call-to-action button.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Service title (will be displayed in uppercase)",
    },
    description: {
      control: "text",
      description: "Service description text",
    },
    buttonText: {
      control: "text",
      description: "Text to display on the button",
    },
    onButtonClick: {
      action: "clicked",
      description: "Function called when button is clicked",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpgradeService: Story = {
  args: {
    title: "UPGRADE SERVICE",
    description: "Ready to upgrade to a new device? Learn about your options.",
    buttonText: "Call to Upgrade (888) 888-8888",
  },
};

export const MoveService: Story = {
  args: {
    title: "MOVE SERVICE",
    description:
      "It's easy to transfer your Consumer Cellular service without missing a beat.",
    buttonText: "Call to Move (888) 888-8888",
  },
};

export const CustomService: Story = {
  args: {
    title: "CUSTOM SERVICE",
    description:
      "This is a custom service description that can be used for any type of service offering.",
    buttonText: "Call Now (555) 123-4567",
  },
};
