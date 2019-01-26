import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import View from './../../containers/View';
import ViewId from './../../containers/View/ViewId';
import Form from './../../containers/Form';
import Header from './../Header';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'


import CSS from './App.css';

library.add(faIgloo)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={CSS.App}>
          <Header/>
          <div className={CSS.Menu}>
            <Link to="/Form"><Button  variant="contained" color="primary" >Form</Button></Link>
            <Link to="/"><Button  variant="contained" color="primary" >Home</Button></Link>
          </div>
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
