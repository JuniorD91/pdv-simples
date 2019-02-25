import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import HeaderTemplate from '../Template/HeaderTemplate';
import MenuTemplate from '../Template/MenuTemplate';
import Rodape from '../Template/Rodape';
import CadastroCliente from '../Cliente/Cadastro';
import VendaProduto from '../Mercadoria/Venda/Produto';

import 'antd/dist/antd.css'; 

import {
    Layout, Breadcrumb,
  } from 'antd';

  const {
    Content 
  } = Layout;

const Routes = () => (
    <BrowserRouter>
        <Layout>
               <HeaderTemplate />
               <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <MenuTemplate />
                        <Content style={{ padding: '0 24px', minHeight: 500 }}>                   
                                <Switch>
                                  <Route exact path="/" component={CadastroCliente}/>
                                  <Route exact path="/cadastrar-cliente" component={CadastroCliente}/>
                                  <Route exact path="/venda-produto" component={VendaProduto}/>
                                </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Rodape />
            </Layout>
    </BrowserRouter>
)

export default Routes;