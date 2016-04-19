import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import YoutubePlayer from './YoutubePlayer';

const App = (props) => {
  return (
    <div>
      <div className="topbar">
        <div className="container">
          <a href="https://redesustentabilidade.org.br" className="menuItem">
            <i className="logo-rede"></i>Rede Sustentabilidade
          </a>
           <a href="https://twitter.com/maisumnarede" target="_blank" className="menuItem menuItem--redes"><i className="fa fa-twitter"></i></a>
           <a href="https://facebook.com/BrasilEmRede" target="_blank" className="menuItem menuItem--redes"><i className="fa fa-facebook-official"></i></a>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <h1><Link to="/">conheça a rede</Link></h1>
          <p>Esta página foi criada para apresentar a visão da REDE sobre diversos temas de interesse da sociedade e esclarecer as dúvidas a respeito dos nossos posicionamentos.</p>
        </div>
      </div>

      {props.children}

      <div className="footer">
        <a href="https://redesustentabilidade.org.br"><i className="logo-rede"></i></a>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
