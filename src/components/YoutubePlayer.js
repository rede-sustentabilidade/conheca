import React, { PropTypes } from 'react';

// Since this component is simple and static, there's no parent container for it.
const YoutubePlayer = ({id, playVideo, appState}) => {

    const thumbnail = {
      backgroundImage: 'url(http://i.ytimg.com/vi/' + id + '/sddefault.jpg)'
    };

    const size = {
      width: '640px',
      height: '360px'
    };

    return (<div>
      {
        !appState.isPlaying
        ? <div className="youtube" style={{...size, thumbnail}}><div className="play" onClick={playVideo}></div></div>
      : <iframe frameBorder="0" src={"https://www.youtube.com/embed/" + id + "?autoplay=1&autohide=1&modestbranding=1&showinfo=0&controls=0&vq=hd720"} style={size} />
      }
    </div>);
};

YoutubePlayer.propTypes = {
  id: PropTypes.string.isRequired,
  playVideo: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default YoutubePlayer;
