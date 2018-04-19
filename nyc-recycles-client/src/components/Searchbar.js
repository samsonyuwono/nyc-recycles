import React from "react";

class Searchbar extends React.Component {
  state = {
    input: ""
  };

  handleOnChange = event => {
    this.setState({ input: event.target.value });
  };

  searchBorough = event => {
    event.preventDefault();
    this.props.onSearch(this.state.input);
    event.currentTarget.reset;
  };

  render() {
    return (
      <div className="BarContainer">
        <form className="search-form" onSubmit={this.searchBorough.bind(this)}>
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
    );
  }
}

export default Searchbar;
