import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import { withAdminAuthorization } from './hocs/withAuthorization';
import { withUserAuthorization } from './hocs/loggedInRoute';

import LoginForm from './components/user/LoginForm';
import RegisterForm from './components/user/RegisterForm';
import Catalog from './components/catalog/Catalog';

import Home from './components/common/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NotFound from './components/common/NotFound';
import Logout from './components/user/Logout';
import PostCreateForm from './components/post/PostCreate'


class App extends Component {

  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Fragment>
            <Header/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' component={LoginForm}/>
              <Route path='/register' component={RegisterForm} />
              <Route path='/logout' component={Logout} />
              <Route path='/catalogue' exact component={withUserAuthorization(Catalog)} />
              <Route path='/create-post' component={withUserAuthorization(PostCreateForm)}/>
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
