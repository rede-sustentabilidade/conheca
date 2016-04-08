import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/fuelSavingsActions';
// import FuelSavingsForm from '../components/FuelSavingsForm';

class FuelSavingsPage extends Component {
  render() {
    return (
      <div>
        <div className="themes-group__with-icons">
          <h2></h2>
          <hr />
          <p></p>

        </div>
        <div className="themes-group"></div>
        <div className="themes-group"></div>
      </div>
    );
  }
}

// <FuelSavingsForm
//   saveFuelSavings={this.props.actions.saveFuelSavings}
//   calculateFuelSavings={this.props.actions.calculateFuelSavings}
//   appState={this.props.appState}
// />

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
