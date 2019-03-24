
export default function funcionario(state = [], action){
    
    switch (action.type) {
        case 'ADD_FUNCIONARIO':
          return [ ...state,                 
                    action.text,
           ]
        default:
            return state;
    }
}
