import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from '../index';

export default {
    title: 'Example/Button',
    component: Button,
    args: {
        children: "Button",
        size: "md",
        loading: false,
        disabled: false,
        outline: false,
        ripple: true,
        block: false,
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});