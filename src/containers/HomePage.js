import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/conhecaActions';
import YoutubePlayer from '../components/YoutubePlayer';
import ThemeGroup from '../components/ThemeGroup';

class HomePage extends Component {

  componentWillMount() {
    this.props.actions.loadThemes();
  }

  render() {
    return (
      <div className="main-content container">
        <YoutubePlayer
          id="lR4tJr7sMPM"
          appState={this.props.appState}
          playVideo={this.props.actions.playFeaturedVideo} />
        <div className="page-actions">
          <a className="button button--facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//conheca.redesustentabilidade.org.br"><i className="fa fa-facebook"></i>Compartilhe a verdade</a>
          <a className="button button--twitter" target="_blank" href="https://twitter.com/home?status=Conhe%C3%A7a%20a%20vis%C3%A3o%20da%20REDE%20sobre%20diversos%20temas%20de%20interesse%20da%20sociedade%20que%20j%C3%A1%20foram%20debatidos.%20%20https%3A//conheca.redesustentabilidade.org.br"><i className="fa fa-twitter"></i>Doe um tweet</a>
        </div>
        <ThemeGroup appState={this.props.appState} title="mais questões dos jovens" description="O tempo na TV é limitado e não coube tudo lá. Por isso, colocamos aqui as outras perguntas feitas pelos estudantes e as respostas dos nossos porta-vozes e líderes da bancada." />
        <ThemeGroup appState={this.props.appState} title="posições do partido" description="Desde a fundação da REDE, já defendemos muitas posições em debates sobre temas de interesse público. Com o registro no TSE, a nossa bancada tem participado de várias votações importantes e ações respaldadas pela sociedade, como o pedido de cassação do deputado Eduardo Cunha e do senador Delcídio do Amaral, ex-líder do governo." />
        <ThemeGroup appState={this.props.appState} title="Mas… e a Marina?" description="A divulgação de mentiras e boatos nas redes sociais é orquestrada e tem a finalidade de enganar os cidadãos e atacar a honra de adversários políticos. O pior é que muitas pessoas compartilham esses conteúdos sem pesquisar a veracidade, e de tanto as mentiras se espalharem, ela acaba parecendo verdade. Nesta página, vamos disponibilizar o máximo possível de informaçoes sobre os diversos temas que ja foram distorcidos por aí." />
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
