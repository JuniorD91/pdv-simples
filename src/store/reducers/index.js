import { combineReducers } from 'redux';

import dadosPessoais from './dadosPessoais';
import filial from './filial';
import endereco from './endereco';
import online from './online';
import funcionario from './funcionario';

export default combineReducers({
    dadosPessoais, filial, endereco, online, funcionario
})