// src/components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button", // Storybook 사이드바에서 보이는 경로
    component: Button,
    tags: ["autodocs"], // 자동 문서화
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Primary Button",
        primary: true,
    },
};

export const Secondary: Story = {
    args: {
        label: "Secondary Button",
        primary: false,
    },
};

export const Clickable: Story = {
    args: {
        label: "Click Me",
        onClick: () => alert("Button clicked!"),
    },
};