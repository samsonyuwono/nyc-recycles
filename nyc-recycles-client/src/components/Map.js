import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class Map extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      console.log(node);
      let { initial, zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
      console.log(this.map);
    }
  }
  render() {
    const style = {
      width: "50vw",
      height: "50vh"
    };
    return (
      <div style={style} ref="map">
        Loading map...
      </div>
    );
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
};
Map.defaultProps = {
  zoom: 8,
  // San Francisco, by default
  initialCenter: {
    lat: 40.577492,
    lng: -73.946325
  }
};

export default Map;
