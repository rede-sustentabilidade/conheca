import React, { PropTypes } from 'react';
import ThemeDetails from '../components/ThemeDetails';

const ThemeGroup = ({title, description, appState}) => {
  return (
    <div className="themes-group">
      <h2>{title}</h2>
      <p>{description}</p>
      <ThemeDetails color="#000" title="testando as titulos" id="12" slug="testando-url" />
      <ThemeDetails image="/images/teste.png" title="testando as titulos" id="12" slug="testando-url" />
    </div>
  );
};

ThemeGroup.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  appState: PropTypes.object.isRequired
};

export default ThemeGroup;
