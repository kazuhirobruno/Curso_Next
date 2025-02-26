import Estatistica from '@/components/Estatistica'
import styles from '../styles/Resultado.module.css'
import Botao from '../components/Botao'
import { useRouter } from "next/router"

export default function resultado() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas

  const percentual = Math.round((certas/total) *100)
  return (
    <div className={styles.resultado}>
      <h1>Resultado</h1>
      <div style={{ display: 'flex' }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo='#9cd2a4'/>
        <Estatistica texto="Percentual" valor={percentual} corFundo='#DE6a33'/>
      </div>
      <Botao href="/" texto="Tentar novamente" />
    </div>
  )
}