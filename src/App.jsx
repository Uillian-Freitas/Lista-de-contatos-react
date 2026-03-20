import Contato from "./components/contatos/Contato"
import { useState } from "react"

function App() {

  const [contatos, setContatos] = useState ([

    {
      nome: "João silva",
      email: "joao@email.com",
      telefone: "99999-9999"
    },
    {
      nome: "Maria Souza",
      email: "maria@email.com",
      telefone: "88888-8888"
    },
    {
      nome: "Pedro Santos",
      email: "pedro@email.com",
      telefone: "77777-7777"
    }

  ])

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    function removerContato(indexParaRemover) {
      const novaLista = contatos.filter((_, index) => index !== indexParaRemover)
      setContatos(novaLista)
    }

    const [indexEditando, setIndexEditando] = useState(null)

    function editarContato(index) {
      const contato = contatos[index]

      setNome(contato.nome)
      setEmail(contato.email)
      setTelefone(contato.telefone)

      setIndexEditando(index)
    }

    function salvarContato() {
      const novoContato = {
        nome,
        email,
        telefone
      }

      if (indexEditando === null) {
        setContatos([...contatos, novoContato])
      }else {
  const novaLista = contatos.map((contato, index) => {
    if(index === indexEditando) {
      return novoContato
    }
    return contato
  })
  
  setContatos(novaLista)
  setIndexEditando(null)
}
setNome('')
setEmail("")
setTelefone('')
      }
    return (
    
        <div>
          <h1>Lista de contatos</h1>
          <input type="text"
          placeholder="Digite um nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}/>
          <p>{nome}</p>

          <input type="text"
          placeholder="Digite o e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <p>{email}</p>

          <input type="text"
          placeholder="Digite um telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)} />
          <p>{telefone}</p>

          <button onClick={salvarContato}>{indexEditando === null ? "Adicionar" : "Atualizar"}</button>
        {contatos.map((contato, index) => (
        <Contato
        key={index}
        nome={contato.nome}
        email={contato.email}
        telefone={contato.telefone}
        onEditar={() => editarContato(index)}
        onRemover={() => removerContato(index)}
        />
        ))}
        </div>
  )
}

export default App
