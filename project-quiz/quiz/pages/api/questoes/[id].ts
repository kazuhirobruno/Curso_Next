import questoes from '../bancoDeQuestoes'

export default (req: { query: { id: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: any }): void; new(): any } } }) => {
  const idSelecionado = +req.query.id
  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
    // res.status(200).json(questaoSelecionada.responderCom(0).paraObjeto())
    res.status(200).json(questaoSelecionada.paraObjeto())
  } else {
    res.status(204).send()
  }
}