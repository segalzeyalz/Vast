import React, { Component } from 'react';
import * as actionType from './../../actions';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { addVast, changeVast } from "../../actions";

import CSS from './Form.css';
    

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

class Form extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { classes } = this.props;
        //Positions for select
        let positions = [
        {value:"top_left",label:"top left"},
        {value:"top_middle",label:"top middle"},
        {value:"top_right",label:"top right"},
        {value:"middle_left",label:"middle left"},
        {value:"bottom_left",label:"bottom left"},
        {value:"middle_right",label:"middle right"},
        {value:"bottom_middle",label:"bottom middle"},
        {value:"bottom_left",label:"bottom left"},
        {value:"bottom_right",label:"bottom right"}]
        //Render all layouts
        let { changeVast,addVast, vast_url, hide_ui, position } = this.props
        return (
            <div className={CSS.Container}>
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="URL"
                className={classes.textField}
                margin="normal"
                onKeyPress={(e)=>changeVast(e.target.name,e.target.value)} name="vast_url"
              />
               <TextField
                select
                label="Hide UI"
                className={classes.textField}
                onChange={(e)=>changeVast(e.target.name,e.target.value)} name="hide_ui"
                SelectProps={{
                    native: true,
                   }}
            margin="normal">
             {[{value:0, label:"false"},{value:1, label:"true"}].map(option => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
              ))}
        </TextField>
        <TextField
                select
                label="position"
                className={classes.textField}
                onChange={(e)=>changeVast(e.target.name,e.target.value)} name="position"
                SelectProps={{
                    native: true,
                   }}
            margin="normal">
             {positions.map(option => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
              ))}
        </TextField>
              <Link to="/">
                <Button className={CSS.MarginBtn} variant="outlined" color="primary" onClick={()=>addVast(vast_url, hide_ui, position)}>
                    Submit
                </Button>
            </Link>
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

  
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Form));