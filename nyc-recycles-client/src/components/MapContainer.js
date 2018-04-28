import React from "react";
import Map from "./Map";
import { GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    console.log(this.props.google);
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);
