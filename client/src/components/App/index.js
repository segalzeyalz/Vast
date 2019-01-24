import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
        </div>
        <Switch>
            <Route exact path="/" component={Layouts}/>
            <Route path="/Layout/:id" component={LayoutContainer}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
