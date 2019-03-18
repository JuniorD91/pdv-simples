export function handleEmail(text){
    return {
        type : 'HANDLE_EMAIL',
        text,
    }
}

export function handleSenha(text){
    return {
        type : 'HANDLE_SENHA',
        text,
    }
}