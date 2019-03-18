const initialFilial = [
    {
        pai : '',
        mae : '',
    }
]

export default function filial(state = initialFilial, action){
    switch (action.type) {
        case 'HANDLE_PAI':
            return {
                ...state,
                pai : action.text,
            }
        case 'HANDLE_MAE':
            return {
                ...state,
                mae : action.text,
            }
        default:
            return state;
    }
}