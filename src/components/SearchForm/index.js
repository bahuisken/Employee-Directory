import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Filter</span>
        </div>
        <input
          onChange={(e) => props.newSearch(e.target.value)}
          name="employees"
          list="employee"
          type="text"
          className="form-control"
          placeholder="Type in an Employees name to filter"
          id="employee"
        />
      </div>
    </form>
  );
}

export default SearchForm;
