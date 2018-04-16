import React from "react";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NYC Recycles</h1>
        <MuiThemeProvider>
          <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
