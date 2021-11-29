import React from "react";
export declare namespace TypeAttributes {
    type Size = "lg" | "md" | "sm";
    type Color = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'violet';
}
export interface DefaultProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
