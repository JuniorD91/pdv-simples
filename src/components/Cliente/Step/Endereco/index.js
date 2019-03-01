import React, { Component } from 'react';
import { Input, Form } from 'antd';

export default class Endereco extends Component{
    render(){
        return (
            <Form.Item>
                <Input placeholder="CEP" />
                <Input placeholder="Endereco" />
                <Input placeholder="Numero" />
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input placeholder="Estado" />
            </Form.Item>
        )
    }
}