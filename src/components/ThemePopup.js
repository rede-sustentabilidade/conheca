import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import { Link, IndexLink } from 'react-router';

const ThemePopup = ({content, isOpenModal, handleCloseModal}) => {

  const customStyles = {
    content : {
      'max-width' : '80%',
      'max-height' : '95%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  return (content !== ''
    ? <Modal style={customStyles} isOpen={isOpenModal}><a className="close" href="javascript:void(0);" onClick={handleCloseModal}><i className="fa fa-times"></i></a><div dangerouslySetInnerHTML={{__html:content}} /></Modal>
  : <span></span>
  );

};

ThemePopup.propTypes = {
  image: PropTypes.string,
  isOpenModal: PropTypes.bool
};

export default ThemePopup;
