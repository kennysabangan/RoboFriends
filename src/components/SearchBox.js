import React from "react";

const SearchBox = ({ setSearchfield }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={e => setSearchfield(e.target.value)}
      />
    </div>
  )
}

export default SearchBox;