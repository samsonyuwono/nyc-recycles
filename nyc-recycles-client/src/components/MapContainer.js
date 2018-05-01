import React from "react";
import Map from "./Map";
import Marker from "./Marker";
import { GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    console.log(this.props.google);
    const pos = { lat: 40.687, lng: -73.97 };
    return (
      <div>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);
