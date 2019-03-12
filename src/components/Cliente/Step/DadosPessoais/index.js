import React, { Component } from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';

const Option = Select.Option;

export default class DadosPessoais extends Component {

    state = {
        dadosPessoais : {
           nome : '',
           cpf : '',
           rg : '',
           dataNascimento : '',
           signo : '',
        }

        
    }

    _salvarDadosPessoais = () => {
        console.log(this.state.dadosPessoais);
    } 
    
    _changeName = (e) =>{
        let nomeParam = e.target.value;
        
        this.setState(prevState => 
            ({dadosPessoais : {...prevState.dadosPessoais, nome : nomeParam}})
        )
    }

    _changeCPF = (e) =>{
        let cpfParam = e.target.value;

        this.setState(prevState => 
            ({dadosPessoais : {...prevState.dadosPessoais, cpf : cpfParam}})
        )
    }

    _changeRG = (e) =>{
        let rgParam = e.target.value;
        
        this.setState(prevState => 
            ({dadosPessoais : {...prevState.dadosPessoais, rg : rgParam}})
        )
    }

    _changeDataNascimento = (value, dateString) =>{
        this.setState(prevState => 
            ({dadosPessoais : {...prevState.dadosPessoais, dataNascimento : dateString}})
        )
    }

    _changeSigno = (value) =>{
        this.setState(prevState => 
            ({dadosPessoais : {...prevState.dadosPessoais, signo : value}})
        )
     }

    render(){

        const signos = [
            {
                id:1,
                descricao : 'ÁRIES',
            },
            {
                id:2,
                descricao : 'TOURO',
            },
            {
                id:3,
                descricao : 'GÊMEOS',
            },
            {
                id:4,
                descricao : 'LEÃO',
            },
            {
                id:5,
                descricao : 'VIRGEM',
            },
            {
                id:6,
                descricao : 'LIBRA',
            },
            {
                id:7,
                descricao : 'ESCORPIÃO',
            },
            {
                id:8,
                descricao : 'SARGITARIO',
            },
            {
                id:9,
                descricao : 'CAPRICÓRNIO',
            },
            {
                id:10,
                descricao : 'AQUÁRIO',
            },
            {
                id:11,
                descricao : 'PEIXES',
            },
        ]

        return(
            <Form.Item>
                <Input placeholder="Nome" 
                    value = {this.state.dadosPessoais.nome} 
                    onChange={this._changeName}
                />
                
                <Input placeholder="CPF" 
                    value = {this.state.dadosPessoais.cpf}
                    onChange={this._changeCPF}
                />
                
                <Input placeholder="RG" 
                    value = {this.state.dadosPessoais.rg}
                    onChange={this._changeRG}/>
                
                <DatePicker placeholder="Data de Nascimento" 
                    format="DD-MM-YYYY"
                    onChange={this._changeDataNascimento}
                    />
                
                <Select placeholder="Selecione" onChange={this._changeSigno}>
                    {signos.map((signo) =>
                        <Option key={signo.id}>{signo.descricao}</Option>
                    )}
                </Select>
                <Button onClick={this._salvarDadosPessoais}>Salvar Dados</Button>
            </Form.Item>
        )
    }
}