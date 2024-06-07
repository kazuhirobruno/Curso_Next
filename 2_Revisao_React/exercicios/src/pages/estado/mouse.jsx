import { useState } from "react"

export default function mouse() {
  const [x, alterarX] = useState(0)
  const [y, alterarY] = useState(0)

  const estilo = { 
    backgroundColor: '#222',
    flexDirection: 'column',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  function quandoMover(e) {
    alterarX(e.clientX)
    alterarY(e.clientY)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}