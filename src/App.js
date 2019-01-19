import React, { Component } from "react";
import IronImage from "./IronImage";
import "./App.css";
import smallImage from "./preloading.jpg";
const hdImage = "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905";
class App extends Component {
  render() {
    return (
      <div className="App">
        <IronImage srcPreload={smallImage} srcLoaded={hdImage} />
      </div>
    );
  }
}

export default App;
