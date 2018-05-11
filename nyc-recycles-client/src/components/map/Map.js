import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { camelize } from "../../Services/String";
import { fetchBins } from "../../Services/bins";

const evtNames = ["ready", "click", "dragend"];

export class Map extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      locations: {
        lat: lat,
        lng: lng
      },
      bins: []
    };
  }

  componentDidMount() {
    fetchBins().then(json => {
      this.setState({ bins: json });
    });
    if (!this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            locations: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.locations !== this.state.locations) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.locations;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(curr.lat, curr.lng);
      map.panTo(center);
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      // let { zoom } = this.props;
      // const { lat, lng } = this.state.locations;
      // const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: {
            lat: 40.7485722,
            lng: -74.0068633
          },
          zoom: 13,
          gestureHandling: "cooperative",
          mapTypeId: "roadmap"
        }
      );
      this.map = new maps.Map(node, mapConfig);
      var bins = [];
      console.log(this.props);
    }
    this.forceUpdate();
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = `on${camelize(evtName)}`;
    console.log(handlerName);
    return e => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    };
  }

  renderChildren() {
    const { children } = this.props;
    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.locations
      });
    });
  }

  render() {
    const { bins } = this.state;
    let binLatLng = bins.forEach(bin => {
      const pos = [bin.latitude, bin.longitude];
      // console.log(pos);
    });
    console.log(this.state.bins);
    const style = {
      width: "100vw",
      height: "50vh"
    };
    return (
      <div style={style} ref="map">
        Loading map...
        {this.renderChildren()}
      </div>
    );
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  centerAroundCurrentLocation: PropTypes.bool,
  onMove: PropTypes.func
};

evtNames.forEach(e => (Map.propTypes[camelize(e)] = PropTypes.func));

Map.defaultProps = {
  onMove: function() {},
  zoom: 13,
  initialCenter: {
    lat: 40.7485722,
    lng: -74.0068633
  },
  centerAroundCurrentLocation: false
};

export default Map;
