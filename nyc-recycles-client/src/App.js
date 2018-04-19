import React from "react";
import Searchbar from "./components/Searchbar";
import Locations from "./components/Locations.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NYC Recyles</h1>
        <Searchbar />
        <Locations />
      </div>
    );
  }
}

export default App;
