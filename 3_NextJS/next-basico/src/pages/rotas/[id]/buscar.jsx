import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>
        Rotas / {router.query.id} / buscar
      </h1>
      <Link href="/rotas">
        Voltar
      </Link>
    </div>
  )
}