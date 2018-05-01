import React from "react";
import Map from "./Map";
import Marker from "./Marker";
import { GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    console.log(this.props.google);
    const pos = { lat: 40.7485722, lng: -74.0068633 };
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmOdLihjhv3ceqqXBD-HBp1o7-iHEuZww"
})(MapContainer);
