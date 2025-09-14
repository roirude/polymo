import type {Meta, StoryObj} from "@storybook/react-vite"
import { fn } from "@storybook/test";
import type { ComponentProps } from "react";
import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
    tags: ["autodocs"],
    component: Button,
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: {
                type: "select",
            }
        },
        
    },
    args: {
        onClick: fn()
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        variant: "primary",
    },
    render: (args) => {
        return <Button {...args} onClick={() => console.log("Clicked!")}>Test</Button>
    }
};