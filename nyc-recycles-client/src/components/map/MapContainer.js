import React from "react";
import Map from "./Map";
import Marker from "./Marker";
import InfoWindow from "./InfoWindow";
import { GoogleApiWrapper } from "google-maps-react";
import { fetchBins } from "../../Services/bins";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      bins: []
    };
  }

  componentDidMount() {
    fetchBins().then(json => {
      this.setState({ bins: json });
    });
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
    console.log(this.state.bins);
    const binLatLng = this.state.bins.map((bin, i) => {
      return (
        <Marker
          key={i}
          onClick={this.onMarkerClick}
          name={bin.park_site_name}
          address={bin.address}
          position={{ lat: bin.latitude, lng: bin.longitude }}
        />
      );
    });
    return (
      <div>
        <Map google={this.props.google} onClick={this.onMapClick}>
          {binLatLng}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h6>
                <b>Address:</b> {this.state.selectedPlace.address}
              </h6>
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
