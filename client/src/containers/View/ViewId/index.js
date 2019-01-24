import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchVastXML, fetchVast } from "../../../actions";
import * as actionTypes from './../../../actions';
import CSS from './ViewId.css';

class ViewId extends Component {
  render() {
    console.log(this.props.vast_show)
    return (
      <div className={CSS.FlexyView}>
        {this.props.vast_show? 
          <div>
            <h1>id: {this.props.vast_show.id}</h1>
            <h1>position: {this.props.vast_show.position}</h1>
            <h1>url: {this.props.vast_show.id}</h1>
            <h1>hide ui: {this.props.vast_show.hide_ui}</h1>
          </div>: "loading..."}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { view } = state;
  let { vast_show } = view;
  return {
    vast_hide_ui: vast_show + 1,
    vast_show: view.vasts.vast_show
  };
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVastXML, fetchVast }, dispatch);
}

ViewId.propTypes = {
  getView: PropTypes.func,
  match: PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewId)