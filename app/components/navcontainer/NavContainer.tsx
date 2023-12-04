import React, { useState, useRef } from "react";
import "./navcontainer.css";
import {useEventListener} from "usehooks-ts";

type CustomCSSProperties = React.CSSProperties & {
    "--width"?: string | number;
    "--height"?: string | number;
    "--gradient"?: string;
    "--highlight-color"?: string;
    "--accent-color"?: string;
    "--border-radius"?: string | number;
    "--top"?: string | number;
    "--left"?: string | number;
    "--is-hovered"?: number;
    "--cursor-x"?: string;
    "--cursor-y"?: string;
    "--angle"?: number;
};

type ContainerProps = {
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    top?: string | number;
    left?: string | number;
    color: string;
    accentColor?: string;
    blur?: boolean;
    border?: boolean; 
    borderColor?: string; 
    borderHighlight?: boolean; 
    borderHighlightColor?: string; 
    angle?: number;
    baseFrequency?: string;
    numOctaves?: number;
    children: React.ReactNode; 
};

const Container: React.FC<ContainerProps> = ({
    width,
    height,
    top = 0,
    left = 0,
    color,
    blur = true,
    borderRadius = 0,
    angle,
    baseFrequency = "7",
    numOctaves = 3,
    children,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEventListener('mousemove', (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const { left: containerLeft, top: containerTop } = rect;
            const x = e.clientX - containerLeft;
            const y = e.clientY - containerTop;
            setCursorPosition({ x, y });
        }
    });

    const blurClasses = blur ? "backdrop-blur-[64px]" : "";

    return (
        <div
            className={`container ${blurClasses}`}
            style={{
                "--angle": typeof angle === "number" ? `${angle}deg` : angle,
                "--width": typeof width === "number" ? `${width}px` : width,
                "--height": typeof height === "number" ? `${height}px` : height,
                "--border-radius": `${borderRadius}px`,
                "--top": `${top}px`,
                "--left": `${left}px`,
                "--cursor-x": `${cursorPosition.x}px`,
                "--cursor-y": `${cursorPosition.y}px`,
            } as unknown as CustomCSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            ref={containerRef}
        >
            {children}
            <div className="border" />
        </div>
    );
};

export default Container;
