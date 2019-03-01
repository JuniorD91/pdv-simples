import React, { Component } from 'react';
import { Form, Input, DatePicker, Select } from 'antd';

const Option = Select.Option;

export default class DadosPessoais extends Component {

    state = {
        signos : [
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
    }


    render(){
        return(
            <Form.Item>
                <Input placeholder="Nome" />
                <Input placeholder="CPF" />
                <Input placeholder="RG" />
                <DatePicker placeholder="Data de Nascimento" format="DD-MM-YYYY"/>
                <Input placeholder="Signo" />
                <Select>
                    {this.state.signos.map((signo) =>
                        <Option key={signo.id}>{signo.descricao}</Option>
                    )}
                </Select>
            </Form.Item>
        )
    }
}