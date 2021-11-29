import React from "react";
import {TypeAttributes, DefaultProps} from "../../props";

export interface ButtonProps extends DefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps = {
        size: "md"
    }
    render() {
        const {children, className, ...props} = this.props;
        const rootClass = ["st-btn"];
        if (className) rootClass.push(className);

        return (
            <button {...props} className={rootClass.join(" ")}>
                {children}
            </button>
        )
    }
}