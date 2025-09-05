import clsx from "clsx"

type ButtonProps = {
    label: string,
    variant?: "primary" | "secondary"
    size?: number
    onClick?: () => void
    className?: string
}

const Button = ({ label, variant = "primary", size, onClick, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "text-white px-4 py-2",
                className,
                {
                    "bg-black rounded-xl cursor-pointer hover:bg-black/85 transition-all duration-100": (variant === "primary"),
                    "bg-transparent": (variant === "secondary")
                },
                size ? `text-[${size}px]` : ""
            )}
        >
            {label}
        </button>
    )
}

export default Button