import { useState } from "react"
import Button from "./components/Button"
import Avatar from "./components/Avatar"
import avatar from "./assets/images/avatar.jpg"


function App() {
  const [count, setCount] = useState(0)
  const [variant, setVariant] = useState<"primary" | "secondary">("secondary")

  const handlePrimaryClick = () => {
    setCount(prev => prev + 1)
  }
  const handleSecondaryClick = () => {
    if (variant === "primary") {
      setVariant("secondary");
    } else {
      setVariant("primary");
    }
  }
  return (
    <>
      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center mt-24 gap-5">
        <Button onClick={handlePrimaryClick}>primary {count}</Button>
        <Button variant={variant} onClick={handleSecondaryClick}>secondary</Button>
        <Button size="sm">small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      {/* Avatar */}
      <div className="flex items-center justify-center gap-5 mt-2">
        <Avatar src={avatar} alt="avatar" />
        <Avatar initials="rd" />
        <Avatar size="sm" />
        <Avatar size="lg" />
        <Avatar size="lg" src={avatar} />
      </div>
    </>
  )
}

export default App
