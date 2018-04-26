import React, { Component } from "react";
import Locations from "./Locations";
import Searchbar from "./Searchbar";

class FilteredLocationTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bins: [],
      term: ""
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
    this.setState({ term: event.target.value });
  };

  searchBorough = term => {
    return function(x) {
      return x.borough.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  };

  render() {
    const { bins } = this.state;
    console.log(this.state.term);
    let binShow = bins
      .filter(this.searchBorough(this.state.term))
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
        <div className="BarContainer">
          <Searchbar onChange={this.handleOnChange} value={this.state.term} />{" "}
        </div>
        <div className="BinWrapper" />
        {binShow}
      </div>
    );
  }
}

export default FilteredLocationTable;
