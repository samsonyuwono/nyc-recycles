import React from "react";
import Map from "./Map";
import { GoogleApiComponent, GoogleApiWrapper } from "google-maps-react";

const API_KEY = process.env.GOOGLE_API_KEY;

class MapContainer extends React.Component {
  render() {
    console.log(this.props.google);
    const style = {
      width: "100vw",
      height: "100vh"
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDJ1uSITaZeaMYS7Sd-7kD-VVw594qon7Y"
})(MapContainer);
