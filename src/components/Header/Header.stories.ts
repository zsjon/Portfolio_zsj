// src/components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
    title: "Components/Header", // Storybook 사이드바에서 보이는 경로
    component: Header,
    tags: ["autodocs"], // 자동 문서화
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {
        label: "Primary Header",
        primary: true,
    },
};

// export const Secondary: Story = {
//     args: {
//         label: "Secondary Button",
//         primary: false,
//     },
// };
//
// export const Clickable: Story = {
//     args: {
//         label: "Click Me",
//         onClick: () => alert("Button clicked!"),
//     },
// };