import React, { Component } from "react";
import Searchbar from "./Searchbar";
import BinsTable from "./BinsTable";
import "../../assets/Locations.css";
import { fetchBins } from "../../Services/bins";

class LocationTable extends React.Component {
  state = {
    bins: [],
    input: ""
  };

  componentDidMount = () => {
    fetchBins().then(json => {
      this.setState({ bins: json });
    });
  };

  handleOnChange = event => {
    this.setState({ input: event.target.value });
  };

  searchBorough = input => {
    return function(x) {
      return x.borough.toLowerCase().includes(input.toLowerCase()) || !input;
    };
  };

  render() {
    const { bins } = this.state;
    let binShow = bins
      .filter(this.searchBorough(this.state.input))
      .map((bin, index) => {
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
              <span className="Label">Park Site:</span> {bin.park_site_name}
            </p>
            <p>
              <span className="Label">Type:</span> {bin.site_type}
            </p>
          </div>
        );
      });
    return (
      <div className="BinContainer">
        <h4>Locations of public recycling bins throughout NYC</h4>
        <div className="BarContainer">
          <Searchbar onChange={this.handleOnChange} value={this.state.input} />{" "}
        </div>
        <div className="BinWrapper" />
        {binShow}
      </div>
    );
  }
}

export default LocationTable;
