import styled from "styled-components"

const Card = styled.div`
background-color: ${(props) => (props.removendo ? '#ff4d4d' : '#2a2a3d')};
padding: 15px;
margin: 10px 0;
border-radius: 10px;
transition: all 0.5s ease;
opacity: ${(props) => (props.removendo ? 0 : 1)};
transform: ${(props) =>
    props.removendo ? 'scale(0.8) rotate(5deg)' : 'scale(1)'};
}
`

function Contato(props){
    return(
        <Card removendo={props.removendo}>
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.telefone}</p>

            <button onClick={props.onEditar}>Editar</button>
            <button onClick={props.onRemover}>Remover</button>

        </Card>
    )
}

export default Contato