import React, { Component } from 'react';
import * as actionType from './../../actions';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import CSS from './View.css';
    
class View extends Component {
    constructor(props){
        super(props)
        this.props.getVasts()
    }
    render(){
        //Render all layouts
        return (
            <div className={CSS.Container}>
              {this.props.vasts.map(elem=>
                <Link to={`/vast/${elem.id}`}>
                  <h1>{elem.fruit}</h1>
              </Link>) }
            </div>
        )
    }
}

    const mapStateToProps = state => {
        let { view } = state;
        return {
            vasts: view.vasts,
            vastOpen:view.vast_show
        };
    };
  
  const mapDispatchToProps = dispatch => {
    return {
        getVasts: () => dispatch({type:actionType.GET_VASTS}),
        getVast: (id) => dispatch({type:actionType.GET_VAST_BY_ID, id:id}),
    }
    
}
View.propTypes = {
    getVasts: PropTypes.func,
    getVast: PropTypes.func,
    vasts: PropTypes.array,
    vastOpen: PropTypes.number
}
export default connect(mapStateToProps, mapDispatchToProps)(View);