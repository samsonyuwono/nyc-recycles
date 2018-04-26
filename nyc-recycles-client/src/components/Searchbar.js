import React from "react";

class Searchbar extends React.Component {
  render() {
    console.log(this.props.input);
    return (
      <div className="BarContainer">
        <form>
          <h5>Search for Recycling Bins in Your Borough</h5>
          <input
            type="search"
            onChange={this.props.handleOnChange}
            value={this.props.input}
            name="search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
