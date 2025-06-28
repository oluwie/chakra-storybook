import type { Meta, StoryObj } from "@storybook/react";
import { IconTextSection } from "./IconTextSection";

const meta = {
  title: "Components/IconTextSection",
  component: IconTextSection,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A section component with icon, title, and phone number for service options.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "text",
      description: "URL for the icon image",
    },
    title: {
      control: "text",
      description: "Title text (will be displayed in uppercase)",
    },
    phoneText: {
      control: "text",
      description: "Phone number or call-to-action text",
    },
    alt: {
      control: "text",
      description: "Alt text for the icon image",
    },
    onPhoneClick: {
      action: "phone clicked",
      description: "Function called when phone text is clicked",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconTextSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewService: Story = {
  args: {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c117779632979ae7d51179eef575b71fb75cd59f?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5",
    title: "START NEW SERVICE",
    phoneText: "Call (888) 888-8888",
    alt: "New Service Icon",
  },
};

export const BillingSupport: Story = {
  args: {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44aa0a9b1a12f24dc93eb17f31d379740d166996?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5",
    title: "BILLING SUPPORT",
    phoneText: "Call (888) 888-8888",
    alt: "Billing Support Icon",
  },
};

export const CustomerSupport: Story = {
  args: {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f61ec0e33461a686d3ab20d112978cafddf4233?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5",
    title: "CUSTOMER SUPPORT",
    phoneText: "Call (888) 888-8888",
    alt: "Customer Support Icon",
  },
};

export const CustomService: Story = {
  args: {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c117779632979ae7d51179eef575b71fb75cd59f?placeholderIfAbsent=true&apiKey=35c7d8a4b3104924846723b8dc35bbc5",
    title: "TECHNICAL SUPPORT",
    phoneText: "Call (555) 123-4567",
    alt: "Technical Support Icon",
  },
};
