import { useState } from "react"
import Button from "./components/Button"


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
      <div className="flex flex-wrap items-center justify-center m-40 gap-5">
        <Button onClick={handlePrimaryClick}>primary {count}</Button>
        <Button variant={variant} onClick={handleSecondaryClick}>secondary</Button>
        <Button size="sm">small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </>
  )
}

export default App
