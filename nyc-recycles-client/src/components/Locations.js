import React, { Component } from "react";
import "../assets/Locations.css";

class Locations extends React.Component {
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
    this.setState({ term: event.target.value });
  };

  searchBorough = term => {
    return function(x) {
      return x.borough.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  };

  render() {
    const { bins } = this.state;
    console.log(bins);
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
          <form>
            <label>Search Bar</label>
            <input
              type="search"
              onChange={this.handleOnChange}
              value={this.state.input}
              name="search"
            />
            <button type="submit" id="submit">
              <i className="material-icons icn-search">search</i>
            </button>
          </form>
        </div>
        <div class="BinWrapper" />
        {binShow}
      </div>
    );
  }
}

export default Locations;
