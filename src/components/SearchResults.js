import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchResults = ({results, playVideo, addToFav}) => {
  return (
    <div>
      <ul className="results-list">
        {results.map( result => {
          return <SearchResult
            playVideo={playVideo}
            result={result}
            key={result.id.videoId}
            addToFav={addToFav}
          />;
        })}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
  playVideo: PropTypes.func,
  addToFav: PropTypes.func
};

export default SearchResults;
