import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoClientes"
import ClienteRepositorio from "../core/ClienteRepositorio"
import Cliente from "../core/Cliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()
    
  const [cliente, setCliente] = useState(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  
  const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(obterTodos, [])
  
  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela
  }
} 