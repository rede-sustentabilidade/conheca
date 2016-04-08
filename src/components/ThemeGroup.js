import React, { PropTypes } from 'react';
import ThemeDetails from '../components/ThemeDetails';

const ThemeGroup = ({title, description, themes}) => {
  return (
    <div className="themes-group__with-icons">
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
  themes: PropTypes.string.isRequired
};

export default ThemeGroup;
