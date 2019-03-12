import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
