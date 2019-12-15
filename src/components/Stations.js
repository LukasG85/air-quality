import React, { useState, useContext } from "react";

import SearchStation from "./SearchStation";
import GetStation from "./GetStation";
import Geolocation from "./Geolocation";

import { StationContex } from "../StationContex";

const Stations = () => {
  const allStation = useContext(StationContex);
  const [city, setCity] = useState([]);

  const searchHandler = value => {
    const searchCity = allStation.filter(item => {
      if (item.city !== null) {
        return item.city.name.toLowerCase() === value.toLowerCase();
      } else {
        return null;
      }
    });
    setCity(searchCity);
  };

  return (
    <div className="container ">
      <div className="row no-gutters">
        <div className="col">
          <SearchStation search={searchHandler} />
          {city.length > 0 ? (
            <div className="container">
              <div className="row no-gutters">
                {city.map(item => (
                  <GetStation key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <Geolocation />
          )}
        </div>
      </div>
    </div>
  );
};

export default Stations;
