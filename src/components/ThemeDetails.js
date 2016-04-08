import React, { PropTypes } from 'react';

const ThemeDetails = (props) => {
  return (
    <div>
      <a className="theme-details" href="#">
        <img src="" alt=""/>
      </a>
    </div>
  );
};

ThemeDetails.propTypes = {
  image: PropTypes.string,
  color: PropTypes.string,

  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default ThemeDetails;
