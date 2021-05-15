import React from "react";
import SearchForm from "../SearchForm";
import "./style.css";

function Header(props) {
  return (
    <header>
      <div className="text-center bg-image bg-image-custom">
        <div className="mask mask-custom">
          <div className="d-flex justify-content-center align-items-center h-400">
            <div className="text-white mx-auto">
              <h1 className="mt-5">Employee Directory</h1>
              <p className="mb-3">Search and sort all the employees!</p>
              <SearchForm newSearch={props.newSearch} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
