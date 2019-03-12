import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';

export default class Endereco extends Component{

    state = {
        endereco : {
            cep : '',
            descricao : '',
            numero : '',
            bairro : '',
        }
    }

    _changeCep = (e) => {
        let numberCep = e.target.value;

        this.setState( prevState => 
            ({endereco : {...prevState.endereco, cep : numberCep}})    
        )
    }   

    _changeEndereco = (e) => {
        let nameEndereco = e.target.value;

        this.setState(prevState =>
            ({endereco : {...prevState.endereco, descricao : nameEndereco}})
        )
    }

    _changeNumero = (e) => {
        let numberHome = e.target.value;

        this.setState(prevState =>
            ({endereco : {...prevState.endereco, numero : numberHome}})
        )
    }

    _changeBairro = (e) => {
        let nameBairro = e.target.value;

        this.setState(prevState =>
            ({endereco : {...prevState.endereco, bairro : nameBairro}})
        )
    }

    _onChangeSave = () => {
        console.log('O valor do endereco : ',this.state.endereco);
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

                <Button onClick={this._onChangeSave}>Salvar Endereco</Button>
                
            </Form.Item>
        )
    }
}