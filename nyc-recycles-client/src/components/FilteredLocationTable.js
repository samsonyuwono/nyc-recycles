import React, { Component } from "react";
import Locations from "./Locations";
import Searchbar from "./Searchbar";

class FilteredLocationTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      bins: []
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Searchbar input={this.state.input} />
        <Locations bins={this.state.bins} />
      </div>
    );
  }
}

export default FilteredLocationTable;
