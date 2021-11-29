import React from "react";
import { TypeAttributes, DefaultProps } from "../../props";
export interface ButtonProps extends DefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: TypeAttributes.Size;
    color?: TypeAttributes.Color;
    outline?: boolean;
    loading?: boolean;
    disabled?: boolean;
    ripple?: boolean;
    block?: boolean;
}
export interface RippleProps {
    size?: number;
    x?: number;
    y?: number;
}
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        size: string;
        ripple: boolean;
    };
    state: {
        ripples: never[];
    };
    rippleTimeout: any;
    handlerClick(event: React.MouseEvent<HTMLButtonElement>): void;
    handlerMouseDown(event: React.MouseEvent<HTMLButtonElement>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
