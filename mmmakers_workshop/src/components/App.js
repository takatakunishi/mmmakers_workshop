import React from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';
import '../styles/App.css';
import Home from './pages/Home'
import Live from './pages/Live'
import Talk from './pages/Talk'
import UserLogin from './pages/UserLogin'
import UserRegistration from './pages/UserRegistration'
import WorkDetail from './pages/WorkDetail'
import PostWork from './pages/PostWork'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/live' component={Live} />
        <Route exact={true} path='/Talk' component={Talk} />
        <Route exact={true} path='/login' component={UserLogin} />
        <Route exact={true} path='/post' component={PostWork} />
        <Route path='/WorkDetail' component={WorkDetail} />
        <Route exact={true} path='/signup' component={UserRegistration} />
      </HashRouter>
    </div>
  );
}

export default App;
