import React, { Component } from 'react';
import { Input, Form } from 'antd';


export default class Filiacao extends Component {
    render(){
        return(
            <Form.Item>
                <Input placeholder="Pai" />
                <Input placeholder="Mãe" />
            </Form.Item>
        )
    }
}