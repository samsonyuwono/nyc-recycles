import React from "react";
import FilteredLocationTable from "./components/FilteredLocationTable";
import MapContainer from "./components/MapContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NYC Recyles</h1>
        <MapContainer />
        <FilteredLocationTable />
      </div>
    );
  }
}

export default App;
