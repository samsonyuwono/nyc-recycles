import React, { Component } from "react";
import "../assets/Locations.css";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      bins: []
    };
    this.fetchBins();
  }

  fetchBins() {
    fetch("https://data.cityofnewyork.us/resource/ggvk-gyea.json")
      .then(results => results.json())
      .then(json => this.setState({ bins: json }));
  }

  render() {
    const { bins } = this.state;
    console.log(bins);
    let binShow = bins.map((bin, index) => {
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
    });
    return (
      <div className="BinContainer">
        <h4>Locations of public recycling bins throughout NYC</h4>
        <div class="BinWrapper" />
        {binShow}
      </div>
    );
  }
}

export default Locations;
