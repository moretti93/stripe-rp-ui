import React from "react";
import {TypeAttributes, DefaultProps} from "../../props";

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
    static defaultProps = {
        size: "md",
        ripple: true
    }
    state = {
        ripples: []
    }
    rippleTimeout: any = undefined;
    handlerClick(event: React.MouseEvent<HTMLButtonElement>) {
        this.props.onClick?.(event);
    }
    handlerMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
        if (this.props.disabled || this.props.loading) return;
        this.props.onMouseDown?.(event);
        if (!this.props.ripple) return;
        clearTimeout(this.rippleTimeout);
        this.rippleTimeout = setTimeout(() => {
            this.setState({ripples: []});
        }, 900 * 2);

        const ripples: RippleProps[] = this.state.ripples;
        const container = event.currentTarget.getBoundingClientRect();
        const size = container.width > container.height ? container.width : container.height;
        const x = event.pageX - container.x - size / 2;
        const y = event.pageY - container.y - size / 2;
        const ripple = {size, x, y}
        ripples.push(ripple);

        this.setState({ripples});
    }
    componentWillUnmount() {
        clearTimeout(this.rippleTimeout);
    }

    render() {
        const {color, block, size, ripple, onClick, outline, disabled, loading, children, className, ...props} = this.props;
        const rootClass = ["st-btn", "st-btn-" + size];
        if (color)      rootClass.push("st-btn-" + color);
        if (outline)    rootClass.push("st-btn-outline");
        if (loading)    rootClass.push("st-btn-loading");
        if (block)      rootClass.push("st-btn-block");
        if (className)  rootClass.push(className);
        //TODO: Need add loader component
        return (
            <button {...props} disabled={disabled || loading} className={rootClass.join(" ")} onClick={(e) => this.handlerClick(e)} onMouseDown={(e) => this.handlerMouseDown(e)}>
                {children}
                {ripple && (
                    <div className="ripples">
                        {this.state.ripples.map((ripple: RippleProps, index) => <span key={index} style={{top: ripple.y, left: ripple.x, width: ripple.size, height: ripple.size, animationDuration: "900ms"}}/>)}
                    </div>
                )}
            </button>
        )
    }
}