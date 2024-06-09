import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nome() {
  const router = useRouter()
  return (
    <div>
      <h1>
        Rotas / {router.query.id} / {router.query.nome}
      </h1>
      <Link href="/rotas">
        Voltar
      </Link>
    </div>
  )
}