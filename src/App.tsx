import Button from "./components/Button"


function App() {
  return (
    <>
      {/* Buttons */}
      <div className="flex items-center justify-center m-40 gap-5">
        <Button label="primary" />
        <Button label="secondary" variant="secondary" />
      </div>
    </>
  )
}

export default App
