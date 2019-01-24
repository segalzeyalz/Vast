import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from './../../../actions';
import CSS from './ViewId.css';

class ViewId extends Component {
  componentDidMount(){
    this.props.getView(this.props.match.params.id)
  }
  render() {
    return (
      <div className={CSS.FlexyView}>
        <h1>{this.props.vast_show}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vast_show: state.view.vast_show,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getView: (ViewId) => dispatch({type:actionTypes.CHANGE_VIEW, id: ViewId}),
  }
}

ViewId.propTypes = {
  getView: PropTypes.func,
  match: PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewId)