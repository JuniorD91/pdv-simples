import React, { Component } from 'react';
import { Input } from 'antd';

export default class Online extends Component{
    render(){
        return(
            <div>
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
            </div>
        )
    }
}