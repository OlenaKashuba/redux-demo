import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({query, updateQuery, searchRequest}) => {
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={event => {
        event.preventDefault();
        searchRequest(query);
      }}
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        onChange={event => updateQuery(event.target.value)}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  searchRequest: PropTypes.func
};

export default SearchBar;
