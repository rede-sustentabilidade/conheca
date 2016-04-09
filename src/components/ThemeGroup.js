import React, { PropTypes } from 'react';
import ThemeDetails from '../components/ThemeDetails';

const ThemeGroup = ({title, description, appState, category='jovens'}) => {
  return (
    <div className="themes-group">
      <h2>{title}</h2>
      <p>{description}</p>
      {appState.themes.map((data) => {
        if (data.list_categories[0].name === category) {
          return (<ThemeDetails category={category} image={data.url_featured_media} title={data.title.rendered} id={data.id} slug={data.slug} />);
        }
      })}
    </div>
  );
};

ThemeGroup.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  appState: PropTypes.object.isRequired,
  category: PropTypes.string
};

export default ThemeGroup;
