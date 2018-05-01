import React from "react";
import PropTypes from "prop-types";

class Marker extends React.Component {
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
    const evtNames = ["click", "mouseover"];
    let { map, google, position, mapCenter } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
      map: map,
      position: position
    };
    this.marker = new google.maps.Marker(pref);

    evtNames.forEach(e => {
      this.marker.addListener(e, this.handleEvent(e));
    });
  }

  handleEvent(evtName) {
    return e => {
      const handlerName = evtName
        .split(" ")
        .map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
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

export default Marker;
