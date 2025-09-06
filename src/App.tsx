import Button from "./components/Button"


function App() {
  return (
    <>
      {/* Buttons */}
      <div className="flex items-center justify-center m-40 gap-5">
        <Button>primary</Button>
        <Button variant="secondary">secondary</Button>
      </div>
    </>
  )
}

export default App
