import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/conhecaActions';
import YoutubePlayer from '../components/YoutubePlayer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="video-featured">
          <YoutubePlayer
            id="lR4tJr7sMPM"
            appState={this.props.appState}
            playVideo={this.props.actions.playFeaturedVideo} />
        </div>
        <div className="themes-group__with-icons">
          <h2>mais questões dos jovens</h2>
          <p>O tempo na TV é limitado e não coube tudo lá. Por isso, colocamos aqui as outras perguntas feitas pelos estudantes e as respostas dos nossos porta-vozes e líderes da bancada.</p>
          <div className="theme-details">

          </div>
        </div>
        <div className="themes-group"></div>
        <div className="themes-group"></div>
      </div>
    );
  }
}

HomePage.propTypes = {
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
)(HomePage);
