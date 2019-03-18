import React, { Component } from 'react';
import { Input, Form } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as onlineAction from '../../../../store/actions/onlineAction';

class Online extends Component{

    _onChangeEmail = (e) => {
        this.props.handleEmail(e.target.value);
        //this.setState(prevState => 
        //    ({online : {...prevState.online, email : nomeEmail}})    
        //)

    }
    
    _onChangeSenha = (e) => {
        this.props.handleSenha(e.target.value);
    }

    render(){
        return(
            <Form.Item>

                <Input 
                    placeholder="Email" 
                    value = {this.props.online.email}
                    onChange = {this._onChangeEmail}
                    />

                <Input 
                    placeholder="Senha" 
                    value = {this.props.online.senha}
                    onChange = {this._onChangeSenha}
                    />

            </Form.Item>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(onlineAction,dispatch)
const mapStateToProps = state => ({ online:state.online })

export default connect(mapStateToProps,mapDispatchToProps)(Online)
