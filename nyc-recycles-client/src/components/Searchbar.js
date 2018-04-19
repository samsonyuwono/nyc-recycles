import React from "react";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Searchbar extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="BarContainer">
          <SearchBar
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Searchbar;
