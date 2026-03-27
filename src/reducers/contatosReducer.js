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
    default:
        return state
}   
}
