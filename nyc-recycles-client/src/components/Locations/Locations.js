import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      bins: []
    };
  }

  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/ggvk-gyea.json')
    .then(results => {
      return results.json();
    }).then(data => {
      let bins = data.map((bin, index) => {
        return (
          <div key={index} className="LocationContainer">
            <p><span className="Label">Address:</span> {bin.address}</p>
            <p><span className="Label">Borough:</span> {bin.borough}</p>
            <p><span className="Label">Latitude:</span> {bin.latitude}</p>
            <p><span className="Label">Longitude:</span> {bin.longitude}</p>
            <p><span className="Label">Site:</span> {bin.park_site_name}</p>
            <p><span className="Label">Type:</span> {bin.site_type}</p>
          </div>
        )
      });
      this.setState({bins: bins});
      console.log('state', this.state.bins);
    })
  }

  render() {
    return (
      <div className="BinContainer">
        <h4>Locations of public recycling bins throughout NYC</h4>
        <div class="BinWrapper">
          {this.state.bins}
        </div>
      </div>
    )
  }
}

export default Locations;
