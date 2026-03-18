import Contato from "./components/contatos/contato"
import { useState } from "react"

function App() {

  const [contatos, setContato] = useState ([
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

    return (
    
        <div>
          <h1>Lista de contatos</h1>
        {contatos.map((contato, index) => (
        <Contato
        key={index}
        nome={contato.nome}
        email={contato.email}
        telefone={contato.telefone}
        />
        ))}
        </div>
  )
}

export default App
