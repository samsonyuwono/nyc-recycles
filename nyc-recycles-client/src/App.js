import React from "react";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const API_KEY = "iXmwxvZBItQ8qNuc3zC0jLElZ";

class App extends React.Component {
  getRecyclingBins = async () => {
    const api_call = await fetch(
      `https://data.cityofnewyork.us/resource/ggvk-gyea.json`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>NYC Recycles</h1>
        <MuiThemeProvider>
          <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
