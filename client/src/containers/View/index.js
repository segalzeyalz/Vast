import React, { Component } from 'react';
import * as actionType from './../../actions';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { fetchVasts, fetchVast } from "../../actions";



import CSS from './View.css';
    
class View extends Component {
    constructor(props){
        super(props)
        this.props.fetchVasts()
    }
    render(){
        //Render all layouts
        return (
            <div className={CSS.Container}>
              {this.props.vasts.map((elem)=> {
                  console.log(elem)
                  return (<Link to={`/vast/${elem.id}`}>
                    <h1>{elem.id}</h1>
                </Link>  )
            }
                ) }
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

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ fetchVasts }, dispatch);
      }
    

View.propTypes = {
    fetchVasts: PropTypes.func,
    // getVast: PropTypes.func,
    vasts: PropTypes.array,
    vastOpen: PropTypes.number
}
export default connect(mapStateToProps, mapDispatchToProps)(View);