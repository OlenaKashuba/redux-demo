export const updateQuery = query => {
  return {type: 'UPDATE_QUERY', query: query};
};

function receiveSearch(results, query) {
  return {
    type:'RECEIVE_SEARCH',
    results: results.items,
    query
  };
};

function fetchSearch(query) {
  return function(dispatch) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&type=video&key=AIzaSyDVPb-EbsD1R0TvrQ1DKf1bIOMYcEuQvtM`)
      .then(response => response.json())
      .then(results => dispatch(receiveSearch(results, query)));
  };
};

export const searchRequest = query => {
  return(dispatch) => {
    return dispatch(fetchSearch(query));
  };
};

export const reloadVideo = videoId => {
  return {type: 'UPDATE_VIDEO_ID', videoId};
};

export const addToFav = result => {
  return {type: 'ADD_TO_FAV', result: result};
};

