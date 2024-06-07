import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

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
      <ContadorDisplay numero={num} />
      <div>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  )
}