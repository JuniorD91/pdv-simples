import { combineReducers } from 'redux';

import dadosPessoais from './dadosPessoais';
import filial from './filial';
import endereco from './endereco';
import online from './online';

export default combineReducers({
    dadosPessoais, filial, endereco, online
})