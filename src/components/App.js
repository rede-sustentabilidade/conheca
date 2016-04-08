import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import YoutubePlayer from './YoutubePlayer';

const App = (props) => {
  return (
    <div>
      <div className="topbar">
        <div className="container">
          <a href="https://redesustentabilidade.org.br">Visitar site da #Rede</a>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <h1>conheça a rede</h1>
          <p>Esta página foi criada para apresentar de forma didática a visão da REDE sobre diversos temas de interesse da sociedade que foram debatidos desde a nossa fundação, em 2013. O conteúdo será permanentemente atualizado e você pode colaborar, enviando perguntas, críticas e sugestões.</p>
        </div>
      </div>

      {props.children}

      <div className="footer"></div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
