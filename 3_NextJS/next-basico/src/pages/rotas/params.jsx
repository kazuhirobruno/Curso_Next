import { useRouter } from "next/router"
import Link from 'next/link'

export default function Params() {
  const router = useRouter()
  const { nome, id } = router.query

  return (
    <div>
      <h1>
        Rotas Params: {id} {nome}
      </h1>
      <Link href="/rotas">
        Voltar
      </Link>
    </div>
  )
}