import React from "react";
import AirLook from "./AirLook";
import "./StationResult.scss";

const StationResults = ({ result }) => {
  return (
    <div className="station-result" key={result.key}>
      <span className="station-result__title">
        {result.key === "PM2.5" ? "Suspended dust" : null}
        {result.key === "PM10" ? "Suspended dust" : null}
        {result.key === "NO2" ? "Nitrogen dioxide" : null}
        {result.key === "CO" ? "Carbon monoxide" : null}
        {result.key === "C6H6" ? "Benzene" : null}
        {result.key === "O3" ? "Ozone" : null}
        {result.key === "SO2" ? "Sulphur dioxide" : null}
      </span>

      <span className="station-result__name">{result.key}</span>
      <AirLook item={result} />
    </div>
  );
};

export default StationResults;
