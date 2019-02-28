import React from 'react'

export default function SearchForm(props) {

  const searchForm = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(searchForm.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input
        type="search"
        name="search"
        ref={searchForm}
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
