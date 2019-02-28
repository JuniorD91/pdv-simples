import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

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
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){
        const { current } = this.state;

        let contentStep = steps[current].content; 
        let content;
        
        if(contentStep === 'dados-pessoais-content'){
            content = <h1>Francisco</h1>
        }

        console.log(steps[current].content === 'dados-pessoais-content');
        return(
            <div>
                <div>
                    <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className="steps-content">
                        valor do content : {content}
                    </div>
                    <div className="steps-action">
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                        }
                        {
                            current > 0
                            && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                            </Button>
                            )
                        }
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default CadastroCliente;