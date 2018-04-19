import React from "react";

class Searchbar extends React.Component {
  handleOnChange = event => {
    console.log("blah");
  };

  handleOnChange = event => {
    console.log(event.target.value);
    console.log(this.props);
    // this.props.searchBorough(event.target.value);
  };

  searchBorough(query) {
    let boroughs = this.state.bins.filter(bin => {
      const regex = new RegExp(query, "gi");
      return bin.borough.match(regex);
    });
    this.setState({ boroughs: boroughs });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="BarContainer">
          <form onSubmit={this.searchBorough.bind(this)}>
            <label>Search Bar</label>
            <input
              type="search"
              onChange={this.handleOnChange.bind(this)}
              value={this.state.input}
              name="search"
            />
            <button type="submit" id="submit">
              <i className="material-icons icn-search">search</i>
            </button>
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Searchbar;
