import React, { Component } from "react";
import Searchbar from "./Searchbar";
import BinsTable from "./BinsTable";
import "../assets/Locations.css";

class FilteredLocationTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bins: [],
      input: ""
    };
    this.fetchBins();
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  fetchBins() {
    fetch("https://data.cityofnewyork.us/resource/ggvk-gyea.json")
      .then(results => results.json())
      .then(json => this.setState({ bins: json }));
  }

  handleOnChange = event => {
    console.log(event.target);
    this.setState({ input: event.target.value });
  };

  searchBorough = input => {
    return function(x) {
      return x.borough.toLowerCase().includes(input.toLowerCase()) || !input;
    };
  };

  render() {
    const { bins } = this.state;
    console.log(this.props);
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

export default FilteredLocationTable;
