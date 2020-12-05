import React from 'react';
import { Route } from 'react-router-dom';


import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

import './default.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Registration} />
      
      </div>
    </div>
  );
}

export default App;
