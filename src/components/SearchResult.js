import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({result, addToFav, playVideo}) => {
  const { snippet } = result;
  const { videoId } = result.id;
  const { description, title } = snippet;
  const { height, width, url } = result.snippet.thumbnails.default;
  console.log(result);
  return (
    <li
      className="result-item"
    >
      <img
        className="result-img"
        src={url}
        height={height}
        width={width}
        onClick={ event => {
        playVideo(videoId);
      }}
      />
      <div className="result-description">
        <div>
          <strong>{title}</strong>
        </div>
        {description}
      </div>
      <button className="btnFav" onClick={ event => {addToFav(result);}}>Add to favourites</button>
    </li>
  );
};

SearchResult.propTypes = {
  result: PropTypes.object,
  playVideo: PropTypes.func,
  addToFav: PropTypes.func
};

export default SearchResult;
