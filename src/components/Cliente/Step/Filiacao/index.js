import React, { Component } from 'react';
import { Input, Form } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filiacaoAction from '../../../../store/actions/filiacaoAction';

class Filiacao extends Component {

    _changeMAE = (e) => {
        this.props.handleMae(e.target.value)
    }

    _changePAI = (e) => {
        this.props.handlePai(e.target.value)
    }

    render(){
        return(
            <Form.Item>

                <Input 
                    placeholder="Pai" 
                    onChange={this._changePAI}
                    value={this.props.filial.pai}
                />

                <Input 
                    placeholder="Mãe"
                    onChange={this._changeMAE}
                    value={this.props.filial.mae}
                />
                                    
            </Form.Item>
        )
    }
}

const mapStateToProps = state => ({ filial:state.filial, })
const mapDispatchToProps = dispatch => bindActionCreators(filiacaoAction,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filiacao)