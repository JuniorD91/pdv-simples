import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import {
    Layout, Menu, Icon
    } from 'antd';

const { SubMenu } = Menu;

const {
    Sider
    } = Layout;

export default class MenuTemplate extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
        } else {
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
        }
    }

    render(){
        return(
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    onOpenChange={this.onOpenChange}
                    openKeys={this.state.openKeys}
                    style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />Cadastro</span>} >
                            <Menu.Item key="1">
                                <Link to="/cadastrar-cliente">Funcionário</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />Listagem</span>}>
                            <Menu.Item key="3">
                                <Link to="/venda-produto">Funcionário</Link>
                            </Menu.Item>
                        </SubMenu>
                </Menu>
            </Sider>
        )
    }
}
