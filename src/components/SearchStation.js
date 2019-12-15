import React, { useState, useEffect } from "react";
import "./SearchStation.scss";

const SearchStation = ({ search }) => {
  const [value, setValue] = useState("");
  const inputHandler = e => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value !== "") {
      search(value);
    }
    // eslint-disable-next-line
  }, [value]);
  return (
    <div className="container">
      <div className="row">
        <div className="col search">
          <input
            className="search__input"
            type="tekst"
            placeholder="Enter city"
            value={value}
            onChange={inputHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchStation;
