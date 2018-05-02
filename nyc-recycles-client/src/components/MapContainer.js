import React from "react";
import Map from "./Map";
import Marker from "./Marker";
import InfoWindow from "./InfoWindow";
import { GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick(props, marker, showingInfoWindow) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    console.log(this.state.showingInfoWindow);
    const pos = { lat: 40.687, lng: -73.97 };
    return (
      <div>
        <Map google={this.props.google}>
          <Marker
            onClick={this.onMarkerClick}
            name={"Dolores park"}
            position={pos}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.content}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);
