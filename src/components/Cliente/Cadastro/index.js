import React, { Component } from 'react';
import { Steps, Button, message, Form } from 'antd';

import DadosPessoais from '../Step/DadosPessoais';
import Filiacao from '../Step/Filiacao';
import Endereco from '../Step/Endereco'; 
import Online from '../Step/Online';

import { bindActionCreators } from 'redux';
import * as funcionarioAction from '../../../store/actions/funcionarioAction';
import { connect } from 'react-redux';

const Step = Steps.Step;

const steps = [{
    title: 'Dados Pessoais',
    content: 'dados-pessoais-content',
  }, {
    title: 'Filiação',
    content: 'filiacao-Second-content',
  }, {
    title: 'Enderecço',
    content: 'endereco-Last-content',
  }, {
    title: 'Online',
    content: 'online-Last-content',
  }];

class CadastroCliente extends Component{

    state =  {
        current : 0,
        funcionario : {
            nome : '',
            cpf : '',
            rg : '',
            dataNascimento : '',
            signo : '',

            cep : '',
            descricao : '',
            numero : '',
            bairro : '',

            pai : '',
            mae : '',

            email : '',
            senha : '',
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    onClickSave = () =>{


        const data = {
            key : Math.random(),
            nome : this.props.dadosPessoais.nome,
            cpf : this.props.dadosPessoais.cpf,
            rg : this.props.dadosPessoais.rg,
            dataNascimento : this.props.dadosPessoais.dataNascimento,
            signo : this.props.dadosPessoais.signo,

            cep : this.props.endereco.cep,
            descricao : this.props.endereco.descricao,
            numero : '',
            bairro : this.props.endereco.bairro,

            pai : this.props.filial.pai,
            mae : this.props.filial.mae,

            email : this.props.online.email,
            senha : this.props.online.senha,
        }

        this.props.AddFuncionario(data);

        this.limparCampos();

        message.info('Funcionario salvo com sucesso!');

    }

    limparCampos = () =>{
        this.props.dadosPessoais.nome = '';
        this.props.dadosPessoais.nome = '';
        this.props.dadosPessoais.cpf = '';
        this.props.dadosPessoais.rg = '';
        this.props.dadosPessoais.dataNascimento = '';
        this.props.dadosPessoais.signo = '';

        this.props.endereco.cep = '';
        this.props.endereco.descricao = '';
        this.props.endereco.bairro = '';

        this.props.filial.pai = '';
        this.props.filial.mae = '';

        this.props.online.email = '';
        this.props.online.senha = '';
    }

    render(){
        const { current } = this.state;

        let contentStep = steps[current].content; 
        let content;

        if(contentStep === 'dados-pessoais-content'){
            content = <DadosPessoais />
        }else if(contentStep === 'filiacao-Second-content'){
            content = <Filiacao />
        }else if(contentStep === 'endereco-Last-content'){
            content = <Endereco />
        }else if(contentStep === 'online-Last-content'){
            content = <Online />
        }

        return(
            <Form layout="inline">
                    <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className="steps-content" style={{paddingTop: 20}}>
                        {content}
                    </div>
                    <div className="steps-action">
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>Próximo</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => this.onClickSave()}>Salvar</Button>
                        }
                        {
                            current > 0
                            && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Anterior    
                            </Button>
                            )
                        }
                    </div>
            </Form>
        )
    }
}

const mapStateToProps = state => (
    { 
        funcionario : state.funcionario,
        dadosPessoais : state.dadosPessoais,
        filial : state.filial,
        endereco : state.endereco, 
        online : state.online,
    }
)
const mapDispatchToProps = dispatch => bindActionCreators(funcionarioAction, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(CadastroCliente);