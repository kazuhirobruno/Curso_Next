export function getStaticProps() {
  return {
    revalidate: 7, // Tempo em segundos para revalidar o conteúdo de props
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}