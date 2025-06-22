import { Button } from './index.tsx';
import {fn} from "storybook/test";

export const buttonStory=  {
    title: 'Shared/UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        label: 'Click me!',
        onClick: fn()
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};



export const Primary = {
    args: {
        label: "primary",
        variant: 'primary',
    },
};

export const Secondary = {
    args: {
        label: "primary",
        variant: 'secondary',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
