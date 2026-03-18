function Contato(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.telefone}</p>
        </div>
    )
}

export default Contato