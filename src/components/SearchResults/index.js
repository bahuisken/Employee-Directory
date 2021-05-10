import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <>
      {props.results.map((result) => (
        <tr key={(result.phone, result.email)} className="">
          <td>
            {" "}
            <img
              alt={result.email}
              src={result.picture.large}
              className="img-fluid"
            />
          </td>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.email}</td>
          <td>{result.phone}</td>
          <td>{result.dob.date}</td>
        </tr>
      ))}
    </>
  );
}

export default SearchResults;
