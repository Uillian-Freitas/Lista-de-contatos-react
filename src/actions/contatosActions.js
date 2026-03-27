export function adicionarContato(contato) {
    return {
        type: 'ADICIONAR_CONTATO',
        payload: contato
    }
}