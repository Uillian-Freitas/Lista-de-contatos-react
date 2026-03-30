const estadoInicial = {
    contatos: []
}
export default function contatosReducer(state = estadoInicial, action) {
    switch (action.type) {
    case 'ADICIONAR_CONTATO':
    return{
        ...state,
        contatos: [...state.contatos, action.payload]
    }
    case 'REMOVER_CONTATO':
        return {
            ...state,
            contatos: state.contatos.filter((_, index) => index !== action.payload)
        }   
    case 'EDITAR_CONTATO':
    return {
        ...state,
        contatos: state.contatos.map((contato, index) => {
            if (index === action.payload.index) {
                return action.payload.novoContato
            }
            return contato
        })
    }
        default:
        return state
} 
}