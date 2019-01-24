import React, { Component } from 'react';
import * as actionType from './../../actions';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { fetchVasts, fetchVast } from "../../actions";
import Card from '@material-ui/core/Card';

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
                  return (
                    <Card>
                        <h1>id:{elem.id}</h1>
                        <p>
                        vast_url: <Link to={`/vast/${elem.id}`}>{elem.vast_url}</Link> <br/>
                        hide_ui: {elem.hide_ui==1? 'true':'false'}<br/>
                        position : {elem.position}<br/>
                        </p>
                    </Card>
                 )
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