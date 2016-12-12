import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAroRaD_iXHKa3H5IH-o_hfVCTICeS39CU',
      authDomain: 'manager-f6701.firebaseapp.com',
      databaseURL: 'https://manager-f6701.firebaseio.com',
      storageBucket: 'manager-f6701.appspot.com',
      messagingSenderId: '1025986134014'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, /*Initial states*/ {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
