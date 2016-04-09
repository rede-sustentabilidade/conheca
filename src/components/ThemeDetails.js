import React, { PropTypes } from 'react';

const ThemeDetails = ({image,title,id,slug,color, category='jovens'}) => {
  return (
    <a className={"theme-details theme-details--" + category} href={"temas/" + id + "/" + slug}>
      {image ? <img src={image} alt={title} /> : <span>{title}</span>}
    </a>
  );
};

ThemeDetails.propTypes = {
  image: PropTypes.string,
  color: PropTypes.string,
  category: PropTypes.string,

  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

export default ThemeDetails;
