import React from "react"
import clsx from "clsx"

type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary"
    onClick?: () => void
    className?: string
}

const Button = ({ children, variant = "primary", onClick, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "px-4 py-2 border-2 rounded-sm cursor-pointer transition-all ease-linear duration-100",
                className,
                {
                    "bg-black text-white hover:bg-black/85": (variant === "primary"),
                    "bg-transparent hover:bg-black/5": (variant === "secondary")
                },
            )}
        >
            {children}
        </button>
    )
}

export default Button