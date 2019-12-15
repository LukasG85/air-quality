import React from "react";
import {
  MdSentimentDissatisfied,
  MdSentimentNeutral,
  MdSentimentSatisfied
} from "react-icons/md";
import "./AirLook.scss";

const airValue = value => {
  if (value.key === "PM10") {
    if (value.values[1].value < 50) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value < 200) {
      return <MdSentimentNeutral className="neutral" />;
    } else if (value.values[1].value > 200) {
      return <MdSentimentNeutral className="neutral-sad" />;
    } else if (value.values[1].value >= 300) {
      return <MdSentimentDissatisfied className="sad" />;
    }
  } else if (value.key === "PM2.5") {
    if (value.values[1].value < 25) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value > 25) {
      return <MdSentimentNeutral className="neutral" />;
    } else if (value.values[1].value >= 30) {
      return <MdSentimentNeutral className="neutral-sad" />;
    } else if (value.values[1].value === null) {
      return <span>Brak danych</span>;
    }
  } else if (value.key === "O3") {
    if (value.values[1].value < 120) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value > 120) {
      return <MdSentimentNeutral className="neutral" />;
    } else if (value.values[1].value > 180) {
      return <MdSentimentNeutral className="neutral-sad" />;
    } else if (value.values[1].value >= 240) {
      return <MdSentimentDissatisfied className="sad" />;
    }
  } else if (value.key === "SO2") {
    if (value.values[1].value < 125) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value > 125) {
      return <MdSentimentNeutral className="neutral" />;
    } else if (value.values[1].value > 350) {
      return <MdSentimentNeutral className="neutral-sad" />;
    } else if (value.values[1].value >= 500) {
      return <MdSentimentDissatisfied className="sad" />;
    }
  } else if (value.key === "NO2") {
    if (value.values[1].value <= 40) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value > 40) {
      return <MdSentimentNeutral className="neutral" />;
    } else if (value.values[1].value > 200) {
      return <MdSentimentNeutral className="neutral-sad" />;
    } else if (value.values[1].value >= 400) {
      return <MdSentimentDissatisfied className="sad" />;
    }
  } else if (value.key === "CO") {
    if (value.values[1].value <= 11.1) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value > 11.1) {
      return <MdSentimentNeutral className="neutral" />;
    } else if (value.values[1].value >= 43.2) {
      return <MdSentimentDissatisfied className="sad" />;
    }
  } else if (value.key === "C6H6") {
    if (value.values[1].value <= 5) {
      return <MdSentimentSatisfied className="happy" />;
    } else if (value.values[1].value > 5) {
      return <MdSentimentDissatisfied className="sad" />;
    }
  }
};

const AirLook = ({ item }) => {
  return <div className="icon">{airValue(item)}</div>;
};

export default AirLook;
