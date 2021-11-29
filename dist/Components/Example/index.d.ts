import React from "react";
import { DefaultProps } from "../../props";
export interface ButtonProps extends DefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
