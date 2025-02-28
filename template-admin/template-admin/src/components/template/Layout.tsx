import useAppData from "@/src/data/hook/useAppData"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps {
  titulo: string,
  subtitulo: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}
export default function Layout (props: LayoutProps) {
  const { tema } = useAppData()
  return (
    <div className={`${tema} flex h-screen w-screen`}>
      <MenuLateral />
      <div className={`
        flex flex-col w-full p-7 
        bg-gray-300 dark:bg-gray-800`}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  )
}