import React from 'react';

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Select a Currency"
          id="search"
        />
        <br />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-info"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;