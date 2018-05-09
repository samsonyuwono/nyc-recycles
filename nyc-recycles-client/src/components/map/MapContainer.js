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
      selectedPlace: {},
      bins: []
    };
    this.getBins();
  }

  getBins() {
    fetch("https://data.cityofnewyork.us/resource/ggvk-gyea.json")
      .then(response => response.json())
      .then(json => this.setState({ bins: json }));
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { bins } = this.state;
    console.log(bins);
    let binLatLng = bins.forEach(function(element) {
      var latLng = { lat: element.latitude, lng: element.longitude };
      console.log(latLng);
    });

    const pos = binLatLng;
    return (
      <div>
        <Map google={this.props.google} onClick={this.onMapClick}>
          <Marker
            onClick={this.onMarkerClick}
            name={"FAB"}
            position={binLatLng}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
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
