import React from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';

const SearchResults = ({playVideo, videoId, results}) => {
  return (
    <div>
      <ul className="results-list">
        {results.map( result => {
          return <SearchResult
            playVideo={playVideo}
            result={result}
            key={result.id.videoId}
          />;
        })}
      </ul>
    </div>
  );
};

SearchResults.propTypes = {
  playVideo: PropTypes.func,
  videoId: PropTypes.number,
  results: PropTypes.array
};

export default SearchResults;
