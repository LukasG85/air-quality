import React, { useEffect } from "react";
import { useFetchAir } from "../hooks/useFetchAir";
import StationResults from "./StationResults";

import "./AirInfo.scss";

const AirInfo = props => {
  const {
    getMeasuringStations,
    measuringStations,
    getMeasuringData,
    measuringData
  } = useFetchAir();
  const { match } = props;
  const urlStations = `http://api.gios.gov.pl/pjp-api/rest/station/sensors/${match.params.id}`;
  useEffect(() => {
    getMeasuringStations(urlStations);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (measuringStations !== null) {
      for (let item of measuringStations) {
        getMeasuringData(
          `http://api.gios.gov.pl/pjp-api/rest/data/getData/${item.id}`
        );
      }
    }
    // eslint-disable-next-line
  }, [measuringStations]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            onClick={() => props.history.goBack()}
            className="button-info"
          >
            Back
          </button>
          {measuringData !== null && (
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="air-info">
                    <div className="air-info__content">
                      {measuringData.map(item => (
                        <StationResults key={item.key} result={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirInfo;
