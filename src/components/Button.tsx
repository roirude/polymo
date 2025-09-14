import React from "react"
import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
    className?: string
    size?: "sm" | "md" | "lg"
    children: React.ReactNode
}

const variants = {
    primary: "bg-black text-white hover:bg-black/85",
    secondary: "bg-transparent hover:bg-black/5"
}

const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
}

export const Button = ({ children, variant = "primary", size = "md",  onClick, className, ...props }: ButtonProps) => {
    const buttonClassNames = clsx(
        "px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ease-linear duration-100",
        className,
        variants[variant],
        sizes[size]
    )

    return (
        <button
            onClick={onClick}
            className={buttonClassNames}
            {...props}
        >
            {children}
        </button>
    )
}