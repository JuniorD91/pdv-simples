import React, { Component } from 'react';

import { Table } from 'antd';

import { bindActionCreators } from 'redux';
import * as funcionarioAction from '../../../../store/actions/funcionarioAction';
import { connect } from 'react-redux';

const columns = [{
  title: 'Nome',
  dataIndex: 'nome',
  key: 'name',
}, {
  title: 'CPF',
  dataIndex: 'cpf',
  key: 'cpf',
}];

class VendaProduto extends Component{

    render(){
        const funcionarios = this.props.funcionario;
        return(
          <div>
            <Table dataSource={funcionarios} columns={columns} />           
          </div>
        )
    }
}

const mapStateToProps = state => ({funcionario: state.funcionario,})
const mapDispatchToProps = dispatch => bindActionCreators(funcionarioAction,dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(VendaProduto);