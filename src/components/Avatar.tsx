import clsx from "clsx"
import type { JSX } from "react"

interface AvatarProps {
    src?: string,
    alt?: string
    initials?: string
    size?: "sm" | "md" | "lg"
    variant?: "round" | "square"
    className?: string
}

const sizes = {
    "sm": "w-15 h-15 text-xl",
    "md": "w-20 h-20 text-2xl",
    "lg": "w-30 h-30 text-3xl"
}

const variants = {
    "round": "rounded-full",
    "square": "rounded-md",
}

const Avatar = ({
    src,
    alt,
    initials,
    size = "md",
    variant = "round",
    className
}: AvatarProps) => {

    const avatarClassName = clsx(
        "object-cover",
        className,
        sizes[size],
        variants[variant]
    )

    const avatarElement = (): JSX.Element => {
        if (src) {
            return <img src={src} alt={alt} className={avatarClassName} />
        } else if (initials) {
            return <div className={`bg-black text-white flex items-center justify-center font-black uppercase ${avatarClassName}`}>{initials}</div>
        } else {
            return <div className={`bg-black text-white flex items-center justify-center font-black uppercase ${avatarClassName}`}>PL</div>
        }
    }

    return (
        <>
            {avatarElement()}
        </>
    )
}

export default Avatar;