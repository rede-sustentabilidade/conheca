import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/conhecaActions';
import YoutubePlayer from '../components/YoutubePlayer';
import ThemeGroup from '../components/ThemeGroup';
import ThemePopup from '../components/ThemePopup';

class HomePage extends Component {

  componentDidMount() {
    this.props.actions.loadThemes(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== null && this.props.params.id !== prevProps.params.id) {
      this.props.actions.openThemeDetails(this.props.params.id);
    }
  }

  render() {
    return (
      <div className="main-content container">
        <ThemePopup
          content={this.props.appState.currentTheme[0].content.rendered}
          handleCloseModal={this.props.actions.handleCloseModal}
          isOpenModal={this.props.appState.isOpenModal} />
        <YoutubePlayer
          id="8EgLBECstCc"
          appState={this.props.appState}
          playVideo={this.props.actions.playFeaturedVideo} />

        <div className="page-actions">
          <a className="button button--facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//conheca.redesustentabilidade.org.br"><i className="fa fa-facebook"></i>Compartilhe a verdade</a>
          <a className="button button--twitter" target="_blank" href="https://twitter.com/home?status=Conhe%C3%A7a%20a%20vis%C3%A3o%20da%20REDE%20sobre%20diversos%20temas%20de%20interesse%20da%20sociedade%20que%20j%C3%A1%20foram%20debatidos.%20%20https%3A//conheca.redesustentabilidade.org.br"><i className="fa fa-twitter"></i>Doe um tweet</a>
        </div>

        <ThemeGroup category="jovens" appState={this.props.appState} title="MAIS PERGUNTAS DOS JOVENS" description="Não coube tudo nos dez minutos da TV.  Por isso, colocamos as outras perguntas aqui. É só clicar no tema e assistir à resposta!" />
        <ThemeGroup category="posicoes" appState={this.props.appState} title="POSIÇÕES DA REDE" description="Nesses 3 anos, já promovemos e participamos de vários debates. E nossa bancada tem atuado em votações muito importantes no Congresso Nacional. Clique no tema e saiba mais:" />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  params: PropTypes.object
};

function mapStateToProps(state) {
  return {
    appState: state.videosAppState
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
