import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
  const [num, setNum] = useState(0)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Contador</h1>
      <NumeroDisplay numero={num} />
      <div>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  )
}