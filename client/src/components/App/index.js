import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import View from './../../containers/View'
import Header from './../Header'
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
          <Header/>
          <Switch>
              <Route exact path="/" component={View}/>
              <Route path="/Vast/:id" component={View}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
