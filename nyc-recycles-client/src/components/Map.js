import React from "react";
import ReactDOM from "react-dom";

const API_KEY = process.env.GOOGLE_API_KEY;

class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const map = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new map.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new map.Map(node, mapConfig);
    }
  }

  render() {
    return <div ref="map">Loading map...</div>;
  }
}

export default Map;
