import type { Meta, StoryObj } from "@storybook/react";
import { ConsumerCellularPage } from "./ConsumerCellularPage";

const meta = {
  title: "Pages/ConsumerCellularPage",
  component: ConsumerCellularPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive landing page for Consumer Cellular services with navigation, service sections, and footer.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsumerCellularPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
