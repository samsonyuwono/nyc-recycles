import React from "react";
import LocationTable from "./components/bins/LocationTable";
import MapContainer from "./components/map/MapContainer";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NYC Recycles</h1>
        <MapContainer />
        <LocationTable />
      </div>
    );
  }
}

export default App;
