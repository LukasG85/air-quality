import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StationContex } from "./StationContex";
import { useFetchAir } from "./hooks/useFetchAir";
import Stations from "./components/Stations";
import AirInfo from "./components/AirInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const url = `http://api.gios.gov.pl/pjp-api/rest/station/findAll`;
  const { getAllStation, allStation } = useFetchAir();
  useEffect(() => {
    getAllStation(url);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <h1 className="App__title">Air quality app</h1>
      <Router>
        <Switch>
          <StationContex.Provider value={allStation}>
            <Route exact path={"/"} component={Stations} />
            <Route exact path={`/info/:id`} component={AirInfo} />
          </StationContex.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
