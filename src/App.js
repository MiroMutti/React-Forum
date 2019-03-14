import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import LoginForm from './components/user/LoginForm';
import RegisterForm from './components/user/RegisterForm';

import Home from './components/common/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NotFound from './components/common/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Fragment>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' component={LoginForm} />
              <Route path='/register' component={RegisterForm} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Fragment>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
