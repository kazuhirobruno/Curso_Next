import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


const BASE_URL = "http://localhost:3000/api"

export default function Home() {
  const router = useRouter()

  const [ids, setIds] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  
  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIds(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(( )=> {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ids.length > 0 && carregarQuestao(ids[0])
  }, [ids])

  function questaoRespondida (questao: QuestaoModel) {
    setQuestao(questao)
    const acertou = questao.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {
    if (questao) {
      const proximoIndex = ids.indexOf(questao.id) + 1
      return ids[proximoIndex]
    }
  }

  function irPraProximoPasso () {
    const proximoid = idProximaPergunta()
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    proximoid ? irPraProximaQuestao(proximoid) : finalizar()
  }

  function irPraProximaQuestao (proximoid: number) {
    carregarQuestao(proximoid)
  }

  function finalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: ids.length,
        certas: respostasCertas
      }
    })
  }

  return (
    questao ? (
      <Questionario 
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />  
    ) : false
  );
}
