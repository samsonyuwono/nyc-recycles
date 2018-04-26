import React from "React";

class LocationTable extends React.Component {
  render() {
    return (
      <div key={index} className="LocationContainer">
        <p>
          <span className="Label">Address:</span> {bin.address}
        </p>
        <p>
          <span className="Label">Borough:</span> {bin.borough}
        </p>
        <p>
          <span className="Label">Latitude:</span> {bin.latitude}
        </p>
        <p>
          <span className="Label">Longitude:</span> {bin.longitude}
        </p>
        <p>
          <span className="Label">Longitude:</span> {bin.park_site_name}
        </p>
        <p>
          <span className="Label">Longitude:</span> {bin.site_type}
        </p>
      </div>
    );
  }
}
