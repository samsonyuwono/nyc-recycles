import React from "react";
import Locations from "./components/Locations";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NYC Recyles</h1>
        <Locations />
      </div>
    );
  }
}

export default App;
