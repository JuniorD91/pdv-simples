import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

const Step = Steps.Step;

const steps = [{
    title: 'Dados Pessoais',
    content: 'First-content',
  }, {
    title: 'Filiação',
    content: 'Second-content',
  }, {
    title: 'Enderecço',
    content: 'Last-content',
  }, {
    title: 'Online',
    content: 'Last-content',
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
        return(
            <div>
                <div>
                    <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
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