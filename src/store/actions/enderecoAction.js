export function handleCep(text){
    return {
        type : 'HANDLE_CEP',
        text,
    }
}
export function handleEndereco(text){
    return {
        type : 'HANDLE_ENDERECO',
        text,
    }
}
export function handleNumero(text){
    return {
        type : 'HANDLE_NUMERO',
        text,
    }
}
export function handleBairro(text){
    return {
        type : 'HANDLE_BAIRRO',
        text,
    }
}