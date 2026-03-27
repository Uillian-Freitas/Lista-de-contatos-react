import Contato from "./contatos/ContatoTemp.jsx";
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
background-color: #1e1e2f;
color: white;

display: flex;
justify-content: center;
align-items: center;

min-height: 100vh;
`

const Input = styled.input`
padding: 10px;
margin: 5px;
border-radius: 5px;
border: none;
`

const Botao = styled.button`
padding: 10px;
margin: 10px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`

const Card = styled.div`
background-color: #1a1a1a;
padding: 30px;
border-radius: 10px;
width: 400px;
`



function App() {

  const [contatos, setContatos] = useState ([

    {
      id: 1,
      nome: "João silva",
      email: "joao@email.com",
      telefone: "99999-9999"
    },
    {
      id: 2,
      nome: "Maria Souza",
      email: "maria@email.com",
      telefone: "88888-8888"
    },
    {
      id: 3,
      nome: "Pedro Santos",
      email: "pedro@email.com",
      telefone: "77777-7777"
    }

  ])

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const [removendoIndex, setRemovendoIndex] = useState(null)

    function removerContato(indexParaRemover) {
  setRemovendoIndex(indexParaRemover)

  setTimeout(() => {
    setContatos((prev) =>
      prev.filter((_, index) => index !== indexParaRemover)
    )
    setRemovendoIndex(null)
  }, 900)
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
      console.log(removendoIndex)
    return (
    
        <Container>
          <Card>
          <h1>Lista de contatos</h1>
          <Input type="text"
          placeholder="Digite um nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}/>
          <p>{nome}</p>

          <Input type="text"
          placeholder="Digite o e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <p>{email}</p>

          <Input type="text"
          placeholder="Digite um telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)} />
          <p>{telefone}</p>

          <Botao onClick={salvarContato}>{indexEditando === null ? "Adicionar" : "Atualizar"}</Botao>
        {contatos.map((contato, index) => (
        <Contato
        key={contato.id}
        nome={contato.nome}
        email={contato.email}
        telefone={contato.telefone}
        onEditar={() => editarContato(index)}
        onRemover={() => removerContato(index)}
        />
        ))}
        </Card>
        </Container>
  )
}

export default App
