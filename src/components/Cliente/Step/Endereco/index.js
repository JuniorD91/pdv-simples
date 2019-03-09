import React, { Component } from 'react';
import { Input, Form } from 'antd';

export default class Endereco extends Component{

    state = {
        endereco : {
            cep : '',
            descricao : '',
            numero : '',
            bairro : '',
            cidade : '',
            estado : ''
        }
    }

    _changeCep = (e) => {

    }   

    _changeEndereco = (e) => {

    }

    _changeNumero = (e) => {

    }

    _changeBairro = (e) => {

    }

    _changeCidade = (e) => {

    }

    _changeEstado = (e) => {

    }

    render(){
        return (
            <Form.Item>
                <Input 
                    placeholder="CEP"
                    value={this.state.endereco.cep} 
                    onChange={this._changeCep}
                    />

                <Input 
                    placeholder="Endereco" 
                    value={this.state.endereco.descricao}
                    onChange={this._changeEndereco}
                    />

                <Input 
                    placeholder="Numero"
                    value={this.state.endereco.numero}
                    onChange={this._changeNumero}
                    />
                    
                <Input 
                    placeholder="Bairro" 
                    value={this.state.endereco.bairro}
                    onChange={this._changeBairro}/>
                
            </Form.Item>
        )
    }
}