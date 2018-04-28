import React from "react";
import Map from "./Map";
import { GoogleApiWrapper } from "google-maps-react";

let apiKey = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo";

class MapContainer extends React.Component {
  render() {
    console.log(this.props.google);
    const style = {
      width: "50vw",
      height: "50vh"
    };
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDCvMjhwAUggY8VmB8seyipG49EzJ7uLs0"
})(MapContainer);
