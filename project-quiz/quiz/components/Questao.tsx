import style from '../styles/Questao.module.css';
import QuestaoModel from "@/model/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
  { valor: 'A', cor: '#f2c866' },
  { valor: 'B', cor: '#f266ba' },
  { valor: 'C', cor: '#85d4f2' },
  { valor: 'D', cor: '#bce596' }
]

interface QuestaoProps {
  valor: QuestaoModel,
  tempoPraResposta?: number,
  respostaFornecida: (indice: number) => void,
  tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return <Resposta
        valor={resposta}
        indice={i}
        letra={letras[i].valor}
        corFundoLetra={letras[i].cor}
        key={`${questao.id}${i}`}
        respostaFornecida={props.respostaFornecida}
      />
    })
  }

  return (
    <div className={style.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado}/>
      {renderizarRespostas()}
    </div>
  )
}