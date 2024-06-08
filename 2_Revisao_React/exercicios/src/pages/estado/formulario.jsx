import { useState } from "react"

export default function formulario () {
  const [valor, setValor] = useState('inicial')
 
  function alterarInput() {
    setValor(valor + '!')
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: "column"
    }}>
      <span>{valor}</span>
      <input style={{ color: '#000' }} type="text" value={valor} onChange={e => setValor(e.target.value)} />
      <button onClick={alterarInput}>Alterar</button>
    </div>
  )
}