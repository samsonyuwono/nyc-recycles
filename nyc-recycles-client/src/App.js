import React from "react";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Locations from "./components/Locations/Locations.js"

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
        
        <Locations />
      </div>
    );
  }
}

export default App;
