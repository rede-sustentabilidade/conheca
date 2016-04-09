import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const ThemeDetails = ({image,title,id,slug,color, category='jovens'}) => {
  return (
    <Link className={"theme-details theme-details--" + category} to={"/tema/" + id + "/" + slug}>
      {image ? <img src={image} alt={title} /> : <span>{title}</span>}
    </Link>
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
