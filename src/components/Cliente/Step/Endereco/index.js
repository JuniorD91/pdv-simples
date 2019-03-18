import React, { Component } from 'react';
import { Input, Form } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as enderecoAction from '../../../../store/actions/enderecoAction';

class Endereco extends Component{

    state = {
        endereco : {
            cep : '',
            descricao : '',
            numero : '',
            bairro : '',
        }
    }

    _changeCep = (e) => {
        this.props.handleCep(e.target.value);
    }   

    _changeEndereco = (e) => {
        this.props.handleEndereco(e.target.value);
    }

    _changeNumero = (e) => {
        this.props.handleNumero(e.target.value);
    }

    _changeBairro = (e) => {
        this.props.handleBairro(e.target.value);
    }

    render(){

        return (
            <Form.Item>
                <Input 
                    placeholder="CEP"
                    value={this.props.endereco.cep} 
                    onChange={this._changeCep}
                    />

                <Input 
                    placeholder="Endereco" 
                    value={this.props.endereco.descricao}
                    onChange={this._changeEndereco}
                    />

                <Input 
                    placeholder="Numero"
                    value={this.props.endereco.numero}
                    onChange={this._changeNumero}
                    />

                <Input 
                    placeholder="Bairro" 
                    value={this.props.endereco.bairro}
                    onChange={this._changeBairro}/>

            </Form.Item>
        )
    }
}

const mapStateToProps = state => ({ endereco:state.endereco })
const mapDispatchToProps = dispatch => bindActionCreators(enderecoAction,dispatch)
export default connect (mapStateToProps,mapDispatchToProps)(Endereco)