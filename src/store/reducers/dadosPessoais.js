
const initialPessoais = [
    {
        nome : '',
        cpf : '',
        rg : '',
        dataNascimento : '',
        signo : '',
    }
]

export default function dadosPessoais(state = initialPessoais, action){
    switch (action.type) {
        case 'ADD_NOME_DADOS_PESSOAIS':
            return {
                ...state,
                id: Math.random(),
                nome: action.text,
            }
        case 'ADD_CPF_DADOS_PESSOAIS':
            return {
                ...state,
                id: Math.random(),
                cpf: action.text
            }
        case 'ADD_RG_DADOS_PESSOAIS':
            return {
                ...state,
                id: Math.random(),
                rg: action.text
            }
        case 'ADD_DATA_NASCIMENTO_DADOS_PESSOAIS':
            return {
                ...state,
                id: Math.random(),
                dataNascimento: action.text
            }
        case 'ADD_SIGNO_DADOS_PESSOAIS':
            return {
                ...state,
                id: Math.random(),
                signo: action.text
            }
        default:
            return state;   
    }
}