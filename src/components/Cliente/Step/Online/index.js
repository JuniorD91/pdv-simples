import React, { Component } from 'react';
import { Input, Form } from 'antd';

export default class Online extends Component{
    render(){
        return(
            <Form.Item>
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
            </Form.Item>
        )
    }
}