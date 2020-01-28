import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Onboarding from './components/Onboarding';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path={['/register', '/' ]} component={Onboarding}/>
      <Route exact path={'/register'} component={Register}/>
      <Route exact path={'/'} component={Login}/>
    </div>
  );
};

export default App;
