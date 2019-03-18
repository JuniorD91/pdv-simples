
export function changeNomeDadosPessoais(text){
    return {
        type : 'ADD_NOME_DADOS_PESSOAIS',
        text,
    }
}

export function changeCpfDadosPessoais(text){
    return {
        type : 'ADD_CPF_DADOS_PESSOAIS',
        text,
    }
}

export function changeRgDadosPessoais(text){
    return {
        type : 'ADD_RG_DADOS_PESSOAIS',
        text,
    }
}

export function changeDataNascimentoDadosPessoais(text){
    return {
        type : 'ADD_DATA_NASCIMENTO_DADOS_PESSOAIS',
        text,
    }
}

export function changeSignoDadosPessoais(text){
    return {
        type : 'ADD_SIGNO_DADOS_PESSOAIS',
        text,
    }
}