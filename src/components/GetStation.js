import React from "react";
import { Link } from "react-router-dom";
import "./GetStation.scss";

const GetStation = ({ item }) => {
  const {
    city: { name },
    addressStreet,
    id
  } = item;
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
      <div className="station">
        <div className="station__content">
          <h2 className="station__title">{name}</h2>
          <p className="station__address">{addressStreet}</p>
          <div className="station__button">
            <button>
              <Link to={`/info/${id}`}>Show air quality</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStation;
