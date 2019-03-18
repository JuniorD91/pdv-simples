const initial = [
    {
        email : '',
        senha : '',
    }
]

export default function online(state = initial, action){
    switch (action.type) {
        case 'HANDLE_EMAIL':
            return {
                ...state,
                email : action.text
            }
        case 'HANDLE_SENHA':
            return {
                ...state,
                senha : action.text    
            }
        default:
            return state;
    }
}