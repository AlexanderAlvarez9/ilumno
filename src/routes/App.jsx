import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../assets/styles/containers/App.scss';
import Index from '../components/Index';
import { UserContexts } from '../utils/UserContexts';
import Success from '../components/Success/Success';

const App = () => {
  return (
    <UserContexts.Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/success" component={Success} />
          <Route component={Index} />
        </Switch>
      </BrowserRouter>
    </UserContexts.Provider>
  );
};

export default App;
