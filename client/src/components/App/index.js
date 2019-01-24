import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import View from './../../containers/View'
import ViewId from './../../containers/View/ViewId'
import Form from './../../containers/Form'
import Header from './../Header'
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
          <Header/>
          <Link to="/Form">Form</Link>
          <Switch>
              <Route exact path="/" component={View}/>
              <Route path="/vast/:id" component={ViewId}/>
              <Route path="/Form/" component={Form}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
