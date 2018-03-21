import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import FavContainer from '../containers/FavContainer';


function Search(){
    return (
      <div>
        <SearchBarContainer />
        <SearchResultsContainer />
        <h3>FAVOURITES </h3>
        <FavContainer />
      </div>
    );
};

export default Search;
