import { useState } from "react"
import Button from "./components/Button"


function App() {
  const [count, setCount] = useState(0)
  const [variant, setVariant] = useState<"primary" | "secondary">("primary")

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
      <div className="flex items-center justify-center m-40 gap-5">
        <Button onClick={handlePrimaryClick}>primary {count}</Button>
        <Button variant={variant} onClick={handleSecondaryClick}>secondary</Button>
      </div>
    </>
  )
}

export default App
