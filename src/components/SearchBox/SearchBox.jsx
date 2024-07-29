// import { useState } from 'react'

const SearchBox = ({ value, onsearchbox }) => {
  return (
      <div>
          <p >Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onsearchbox(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;
