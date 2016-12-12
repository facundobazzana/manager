import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="Login" component={LoginForm} title="Please login" initial />
    </Router>
  );
};

export default RouterComponent;
