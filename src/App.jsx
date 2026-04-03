import { useDispatch, useSelector } from "react-redux";
import { adicionarContato, removerContato, editarContato as editarContatoAction } from './redux/actions/contatosActions';
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

  const contatos = useSelector((state) => state.contatos.contatos)
  const dispatch = useDispatch()

  function handleRemover(index) {
    dispatch(removerContato(index))
  }

  function editarContato(index) {
    const contato = contatos[index]

    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)

    setIndexEditando(index)
  }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [indexEditando, setIndexEditando] = useState(null)
    const emailValido = /\S+@\S+\.\S+/.test(email)
    const telefoneValido = /^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)

    function salvarContato() {
        if (!nome || !email || !telefone) {
        alert("Preencha todos os campos")
        return
      }
      if (!emailValido) {
  alert("Digite um email válido")
  return
}
if (!telefoneValido) {
  alert("Telefone deve estar no formato (00) 00000-0000")
  return
}

      const novoContato = {
        id: crypto.randomUUID(),
        nome,
        email,
        telefone    
      };


        if (indexEditando === null) {
    dispatch(adicionarContato(novoContato))
  } else {
    dispatch(editarContatoAction(indexEditando, novoContato))
    setIndexEditando(null)
  }
setNome('')
setEmail("")
setTelefone('')
}

    function formatarTelefone(valor) {
  
  valor = valor.replace(/\D/g, '')

  
  valor = valor.slice(0, 11)

  
  if (valor.length > 10) {
    return valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
  } else if (valor.length > 5) {
    return valor.replace(/^(\d{2})(\d{4,5})/, '($1) $2')
  } else if (valor.length > 2) {
    return valor.replace(/^(\d{2})/, '($1)')
  }

  return valor
}
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
          onChange={(e) => setTelefone(formatarTelefone(e.target.value))} />
          <p>{telefone}</p>

          <Botao onClick={salvarContato}>
            {indexEditando === null ? "Adicionar" : "Atualizar"}
          </Botao>
        {contatos.map((contato, index) => {
          return (
            <div key={contato.id}>
              <Contato
                nome={contato.nome}
                email={contato.email}
                telefone={contato.telefone}
                onRemover={() => handleRemover(index)}
                onEditar={() => editarContato(index)}
              />
            </div>
          );
        })}
      </Card>
    </Container>
  );
}

export default App
