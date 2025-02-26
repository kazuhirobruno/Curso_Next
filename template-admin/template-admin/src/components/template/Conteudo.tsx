interface ConteudoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

export default function Conteudo (props: ConteudoProps) {
  return (
    <div className={`
      flex flex-col
      mt-7
      dark:text-gray-200
    `}>
      {props.children}
    </div>
  )
}