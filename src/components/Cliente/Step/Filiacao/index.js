import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';


export default class Filiacao extends Component {

    state = {
        filiacao :{
            pai : '',
            mae : '',
        }
    }

    _changeMAE = (e) => {
        let nomeMae = e.target.value;

        this.setState(prevState =>
            ({filiacao : {...prevState.filiacao, mae : nomeMae}})    
        )
        
    }

    _changePAI = (e) => {

        let nomePai = e.target.value;

        this.setState(prevState => 
            ({filiacao : {...prevState.filiacao, pai : nomePai}}))
    }

    _salvarFiliacao = () =>{
        console.log('Save da Filiacao', this.state.filiacao);
    }

    render(){
        return(
            <Form.Item>

                <Input 
                    placeholder="Pai" 
                    onChange={this._changePAI}
                    value={this.state.filiacao.pai}
                />

                <Input 
                    placeholder="Mãe"
                    onChange={this._changeMAE}
                    value={this.state.filiacao.mae}
                />
                                    
                <Button onClick={this._salvarFiliacao}>Salvar Filiacao</Button>

            </Form.Item>
        )
    }
}