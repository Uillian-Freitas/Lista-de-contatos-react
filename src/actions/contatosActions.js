export function adicionarContato(contato) {
    return {
        type: 'ADICIONAR_CONTATO',
        payload: contato
    }
}

export function removerContato(index) {
    return {
        type: 'REMOVER_CONTATO',
        payload: index
    }
}

export function editarContato(index, novoContato) {
    return {
        type: 'EDITAR_CONTATO',
        payload: { 
            index, 
            novoContato }
    }
    
}