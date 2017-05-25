import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCePxjDM4hqf5SAhb-bRRdzdRDjkKo8bqw',
    authDomain: 'manager-813e8.firebaseapp.com',
    databaseURL: 'https://manager-813e8.firebaseio.com',
    projectId: 'manager-813e8',
    storageBucket: 'manager-813e8.appspot.com',
    messagingSenderId: '1010173254914'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
