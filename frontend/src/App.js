import React, { Component } from "react";
import "./App.css";
import Listings from "./Listings";
import Item from "./Item";
import AddSearch from "./AddSearch";
import Container from "./Container";

const test = "test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSearch />
        <Listings>
          <Container />
        </Listings>
      </div>
    );
  }
}

export default App;
