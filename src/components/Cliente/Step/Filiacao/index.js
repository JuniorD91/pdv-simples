import React, { Component } from 'react';
import { Input } from 'antd';

export default class Filiacao extends Component {
    render(){
        return(
            <div>
                <Input placeholder="Pai" />
                <Input placeholder="Mãe" />
            </div>
        )
    }
}