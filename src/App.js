import React from 'react';
import { Switch, Route } from 'react-router-dom';

//layouts
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'

//pages
// import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

import './default.scss';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <div className="main">
      <switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage/>
          </HomepageLayout>
        )} />
        <Route path="/register" render={() => (
          <MainLayout>
            <Registration/>
          </MainLayout>
        )} />
        <Route path="/login" render={() => (
          <MainLayout>
            <Login/>
          </MainLayout>
        )} />
      </switch>
      </div>
    </div>
  );
}

export default App;
