import { useState } from "react"

export default function Ex1() {
  const [counter, setCounter] = useState(0)

  const decrementar = () => {
    if (counter == 0) {
      setCounter(0)
      return counter
    }

    setCounter(counter - 1)
  }

  const incrementar = () => {
    setCounter(counter + 1)
  }
  
  return (
    <div>
      <h1>Contador</h1>

        <button onClick={decrementar}>decrementar</button>
        <input type="number" disabled value={counter} />
        <button onClick={incrementar}>incrementar</button>
    </div>
  )
}