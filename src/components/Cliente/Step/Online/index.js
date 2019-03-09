import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';

export default class Online extends Component{

    state = {
        online : {
            email : '',
            senha : '',
        }
    }

    _onChangeEmail = (e) => {
        let nomeEmail = e.target.value;

        this.setState(prevState => 
            ({online : {...prevState.online, email : nomeEmail}})    
        )

    }
    
    _onChangeSenha = (e) => {
        let nomeSenha = e.target.value;

        this.setState(prevState => 
            ({online : {...prevState.online, senha : nomeSenha}})
        )
    }

    _salvarOnline = () => {
        console.log(this.state.online)
    }

    render(){
        return(
            <Form.Item>
                <Input 
                    placeholder="Email" 
                    value = {this.state.online.email}
                    onChange = {this._onChangeEmail}
                    />
                <Input 
                    placeholder="Senha" 
                    value = {this.state.online.senha}
                    onChange = {this._onChangeSenha}
                    />
                <Button onClick={this._salvarOnline}>Salvar</Button>
            </Form.Item>
        )
    }
}