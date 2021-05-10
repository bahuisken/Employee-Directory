import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Header() {
  return (
    <header>
      <div className="text-center bg-image bg-image-custom">
        <div className="mask mask-custom">
          <div className="d-flex justify-content-center align-items-center h-400">
            <div className="text-white mx-auto">
              <h1 className="mt-5">Employee Directory</h1>
              <p className="mb-3">Search and sort all the employees!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
