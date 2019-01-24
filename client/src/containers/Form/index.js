import React, { Component } from 'react';
import * as actionType from './../../actions';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { addVast, changeVast } from "../../actions";

import CSS from './Form.css';
    
class Form extends Component {
    constructor(props){
        super(props)
    }
    render(){
        //Render all layouts
        let {changeVast,addVast, vast_url, hide_ui, position} = this.props
        return (
            <div className={CSS.Container}>
              <label>url</label><input  onKeyPress={(e)=>changeVast(e.target.name,e.target.value)} name="vast_url"/>
              <label>(optional) hide ui</label><select onChange={(e)=>changeVast(e.target.name,e.target.value)} name="hide_ui">
                <option value={1}>true</option>
                <option  value={0}>false</option>
              </select>
              <label>(optional) position</label><select onChange={(e)=>changeVast(e.target.name,e.target.value)} name="position" >
                <option value="top_left">top_left</option>
                <option value="top_middle">top_middle</option>
                <option value="top_right">top_right</option>
                <option value="middle_left">middle_left</option>
                <option value="bottom_left">bottom_left</option>
                <option value="middle_right">middle_right</option>
                <option value="bottom_middle">bottom_middle</option>
                <option value="bottom_left">bottom_left</option>
                <option value="bottom_right">bottom_right</option>
              </select>
              <button onClick={()=>addVast(vast_url, hide_ui, position)}>Submit</button>
            </div>
        )
    }
}

    const mapStateToProps = state => {
        let { form } = state;
        return {
            vast_url:form.vast_url,
            hide_ui: form.hide_ui,
            position:form.position
        };
    };

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ addVast, changeVast }, dispatch);
      }
    

    Form.propTypes = {
    fetchVasts: PropTypes.func,
    // getVast: PropTypes.func,
    vasts: PropTypes.array,
    vastOpen: PropTypes.number
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);