import Link from 'next/link'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
  href?: string
  texto: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

  function renderBotao() {
    return (
      <button 
        className={styles.botao}
        onClick={props.onClick}
      >
        {props.texto}
      </button>
    )
  }
  return props.href ? (
      <Link href={props.href}>
        {renderBotao()}
      </Link>   
    ) : renderBotao()
}