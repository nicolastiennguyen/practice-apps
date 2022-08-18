import React from 'react';

const Search = (props) => {
  return (
    <input
      type = "text"
      placeholder = "Search by word..."
      onChange = {props.handleSearch}
    />
  )
}

export default Search;