function Contato(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.telefone}</p>

            <button onClick={props.onEditar}>Editar</button>
            <button onClick={props.onRemover}>Remover</button>

        </div>
    )
}

export default Contato