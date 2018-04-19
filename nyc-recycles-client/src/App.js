import React from "react";
import Locations from "./components/Locations";
import Searchbar from "./components/Searchbar";

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
