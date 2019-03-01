import React, { Component } from 'react';
import { Input } from 'antd';


export default class DadosPessoais extends Component {
    render(){
        return(
            <div>
                <Input placeholder="Basic usage" />
                <Input placeholder="CPF" />
                <Input placeholder="RG" />
                <Input placeholder="Data de Nascimento" />
                <Input placeholder="Signo" />
            </div>
        )
    }
}