import React, { Component } from 'react';
import { Form, Input, DatePicker, Select } from 'antd';

import { bindActionCreators } from 'redux';
import * as dadosPessoaisAction from '../../../../store/actions/dadosPessoaisAction';
import { connect } from 'react-redux';

const Option = Select.Option;

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

class DadosPessoais extends Component {

    _changeName = (e) =>{
        let nomeParam = e.target.value;
        
        this.props.changeNomeDadosPessoais(nomeParam);

    }

    _changeCPF = (e) =>{
        let cpfParam = e.target.value;

        this.props.changeCpfDadosPessoais(cpfParam)
    }

    _changeRG = (e) =>{
        let rgParam = e.target.value;
        
        this.props.changeRgDadosPessoais(rgParam)
    }

    _changeDataNascimento = (value, dateString) =>{
        this.props.changeDataNascimentoDadosPessoais(value)
    }

    _changeSigno = (e) =>{
            this.props.changeSignoDadosPessoais(e)
        //this.setState(prevState => 
        //    ({dadosPessoais : {...prevState.dadosPessoais, signo : value}})
        //)
     }

    render(){
        return(
            <Form.Item>
                <Input 
                    placeholder="Nome" 
                    value = {this.props.dadosPessoais.nome} 
                    onChange={this._changeName}
                />
                    
                <Input placeholder="CPF" 
                    value = {this.props.dadosPessoais.cpf}
                    onChange={this._changeCPF}
                />
                    
                <Input placeholder="RG" 
                    value = {this.props.dadosPessoais.rg}
                    onChange={this._changeRG}/>
                    
                <DatePicker placeholder="Data de Nascimento" 
                    format="DD/MM/YYYY" value={this.props.dadosPessoais.dataNascimento}
                    onChange={this._changeDataNascimento}
                    />
                    
                <Select placeholder="Selecione..." onChange={this._changeSigno} value={this.props.dadosPessoais.signo}>
                    {signos.map((signo) =>
                        <Option key={signo.id}>{signo.descricao}</Option>
                    )}
                </Select>
            </Form.Item>
        )
    }
}

const mapStateToProps = state =>({ dadosPessoais:state.dadosPessoais, })
const mapDispatchToProps = dispatch => bindActionCreators(dadosPessoaisAction,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(DadosPessoais);