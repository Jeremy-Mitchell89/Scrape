import React, { Component } from "react";
import "./App.css";
import Listings from "./Listings";
import Item from "./Item";
import Container from "./Container";

const test = "test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listings>
          <Container />
        </Listings>
      </div>
    );
  }
}

export default App;
