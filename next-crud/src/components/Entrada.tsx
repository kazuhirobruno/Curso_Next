interface EntradaProps {
  texto: string
  tipo?: 'text' | 'number'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valor: any
  somenteLeitura?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valorMudou?: (valor: any) => void
  className?: string
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input 
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={e => props.valorMudou?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg  
          focus:outline-none bg-gray-100 px-4 py-2 
        ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}