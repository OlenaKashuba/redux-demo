import React from 'react';
import PropTypes from 'prop-types';

const FavItem = ({fav, playVideo}) => {
const { snippet } = fav;
  const { videoId } = fav.id;
  const { description, title } = snippet;
  const { height, width, url } = fav.snippet.thumbnails.default;
  return (
    <li
      className="fav-item"
    >
      <img
        className="fav-img"
        src={url}
        height={height}
        width={width}
        onClick={ event => {
        playVideo(videoId);
      }}
      />
      <div className="fav-description">
        <div>
          <strong>{title}</strong>
        </div>
        {description}
      </div>
    </li>
  );
};

FavItem.propTypes = {
  fav: PropTypes.object,
  playVideo: PropTypes.func
};

export default FavItem;