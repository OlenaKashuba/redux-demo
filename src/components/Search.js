import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';


function Search(){
    return (
      <div>
        <SearchBarContainer />
        <SearchResultsContainer />
      </div>
    );
};

export default Search;
