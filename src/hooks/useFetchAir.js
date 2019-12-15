import { useState } from "react";
export const useFetchAir = url => {
  const [allStation, setAllStation] = useState(null);
  const [station, setStation] = useState(null);
  const [measuringStations, setmeasuringStations] = useState(null);
  const [measuringData, setmeasuringData] = useState([]);

  const getAllStation = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setAllStation(json);
  };
  const getStation = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setStation(json);
  };
  const getMeasuringStations = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setmeasuringStations(json);
  };
  const getMeasuringData = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setmeasuringData(prevState => [...prevState, json]);
  };

  return {
    getAllStation,
    allStation,
    getStation,
    station,
    getMeasuringStations,
    measuringStations,
    getMeasuringData,
    measuringData
  };
};
