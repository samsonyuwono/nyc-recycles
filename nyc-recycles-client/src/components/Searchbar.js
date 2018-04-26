import React from "react";

class Searchbar extends React.Component {
  render() {
    const onChange = this.props.onChange;
    return (
      <form>
        <h5>Search for Recycling Bins in Your Borough</h5>
        <input type="search" onChange={onChange} />{" "}
      </form>
    );
  }
}

export default Searchbar;
