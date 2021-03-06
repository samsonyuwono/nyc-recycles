import React from "react";
import PropTypes from "prop-types";
import { camelize } from "../../Services/String";

const evtNames = ["click", "mouseover", "recenter"];

export class Marker extends React.Component {
  componentDidMount() {
    this.renderMarker();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.map !== prevProps.map ||
      this.props.position !== prevProps.position
    ) {
      this.renderMarker();
    }
  }

  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }

  renderMarker() {
    if (this.marker) {
      this.marker.setMap(null);
    }
    let { map, google, position, mapCenter } = this.props;
    if (!google) {
      return null;
    }

    let pos = position || mapCenter;
    if (!(pos instanceof google.maps.LatLng)) {
      position = new google.maps.LatLng(pos.lat, pos.lng);
    }

    const pref = {
      map: map,
      position: position
    };
    this.marker = new google.maps.Marker(pref);

    evtNames.forEach(e => {
      this.marker.addListener(e, this.handleEvent(e));
    });
  }

  handleEvent(evt) {
    return e => {
      const evtName = `on${camelize(evt)}`;
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.marker, e);
      }
    };
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
};

evtNames.forEach(e => (Marker.propTypes[e] = PropTypes.func));

Marker.defaultProps = {
  name: "Marker"
};

export default Marker;
