import React, { Component } from 'react';
import { Input } from 'antd';

export default class Endereco extends Component{
    render(){
        return (
            <div>
                <Input placeholder="CEP" />
                <Input placeholder="Endereco" />
                <Input placeholder="Numero" />
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input placeholder="Estado" />
            </div>
        )
    }
}