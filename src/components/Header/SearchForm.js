import React from 'react'

export default function SearchForm() {
  return (
    <form className="search-form">
      <label className="is-hidden" htmlFor="search">Search</label>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        />
      <button
        type="submit"
        id="submit"
        className="search-button"
      ><i className="material-icons icn-search">search</i>
      </button>
    </form>
  );
}
