import React from 'react';
import { Router, Route } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import Profile from './pages/Profile';
import MenuBar from './components/menus/MenuBar';
import Home from './pages/Home';
import history from './history';

const App = () => {
  return (
    //TODO Check usage of Router vs BrowserRouter https://stackoverflow.com/questions/56707885/browserrouter-vs-router-with-history-push
    <Router history={history}>
      <UserProvider>
        <Route path='/' component={MenuBar} />
        <Route path='/profile' component={Profile} />
      </UserProvider>
      <Route path='/' exact component={Home} />
    </Router>
  );
};

export default App;
