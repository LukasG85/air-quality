import React, { useContext } from "react";
import { StationContex } from "../StationContex";
import GetStation from "./GetStation";
import "./Geolocation.scss";

const Geolocation = () => {
  const allStation = useContext(StationContex);

  let latUp;
  let latDown;
  let lonUp;
  let lonDown;

  const showPosition = position => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    latUp = lat + 0.2;
    latDown = lat - 0.2;
    lonUp = lon + 0.25;
    lonDown = lon - 0.25;
  };

  const geoStation =
    allStation !== null &&
    allStation.filter(station => {
      if (
        station.gegrLat > latDown &&
        station.gegrLat < latUp &&
        station.gegrLon > lonDown &&
        station.gegrLon < lonUp
      ) {
        return true;
      }

      return false;
    });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return;
    }
  };
  getLocation();

  return (
    <div className="geolocation">
      <h2 className="geolocation__title">Nearest measuring stations</h2>
      <div className="container">
        <div className="row no-gutters">
          {geoStation.length > 0 &&
            geoStation.map(item => <GetStation key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Geolocation;
