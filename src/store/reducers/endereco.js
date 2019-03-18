const initial = [
    {
        cep : '',
        descricao : '',
        numero : '',
        bairro : '',
    }
]

export default function endereco(state = initial, action){
    switch (action.type) {
        case 'HANDLE_CEP': 
            return {
                ...state,
                cep : action.text,
            }
        case 'HANDLE_ENDERECO':
            return {
                ...state,
                descricao : action.text,
            }
        case 'HANDLE_NUMERO':
            return {
                ...state,
                numero : action.text,
            }
        case 'HANDLE_BAIRRO':
            return {
                ...state,
                bairro : action.text,
            }
        default:
            return state;
    }
}
