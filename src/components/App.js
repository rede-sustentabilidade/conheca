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
          <p>A página conheça a Rede é uma página de apresentação da Rede, com informações básicas em linguagem acessível sobre os posicionamentos já adotados em notas ou manifestações públicas. Pode ser considerada um contato inicial com a Rede para quem quer compreender minimamente o partido antes de se aproximar. As informações mais aprofundadas estarão no site institucional.</p>
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
