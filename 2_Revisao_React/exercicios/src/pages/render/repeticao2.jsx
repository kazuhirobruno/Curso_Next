import listaProdutos from "../../data/listaProdutos"

export default function repeticao2() {
  const comBorda = {
    border: '1px solid #fff',
  }

  function renderizarLinhas() {
    return listaProdutos.map((produto) => (
        <tr key={produto.id} style={comBorda}>
          <td style={comBorda}>{produto.id}</td>
          <td style={comBorda}>{produto.nome}</td>
          <td style={comBorda}>{produto.preco}</td>
        </tr>
    ))
  }

  return (
    <div>
      <table style={comBorda}>
        <thead>
          <tr>
            <th style={comBorda}>Código</th>
            <th style={comBorda}>Nome</th>
            <th style={comBorda}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}