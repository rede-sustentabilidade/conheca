import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';

// Since this component is simple and static, there's no parent container for it.
const YoutubePlayer = ({id, playVideo, appState}) => {

    const thumbnail = 'url(//i.ytimg.com/vi/' + id + '/maxresdefault.jpg)';
    const embed = "//www.youtube.com/embed/" + id + "?autoplay=1&autohide=1&modestbranding=1&showinfo=0&controls=1&vq=hd720";
    let size = { 'width': '100%', 'max-width': '854px', height: '480px'};

    if (window.matchMedia("(max-width: 768px)").matches) {
      size = { width: '100%', 'max-width': '427px', height: '240px'};
    }

    return (<div className="video-featured">
      {
        !appState.isPlaying
        ? <div className="youtube" style={{...size, backgroundImage: thumbnail}}>
            <div className="play" onClick={playVideo}>
              <i className="fa fa-play-circle"></i>
            </div>
          </div>
        : <iframe allowFullScreen="allowFullScreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0" src={embed} style={size} />
      }
    </div>);
};

YoutubePlayer.propTypes = {
  id: PropTypes.string.isRequired,
  playVideo: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  isMobile: PropTypes.bool
};

export default YoutubePlayer;
