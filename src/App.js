import React, { Component } from "react";
import IronImage from "./IronImage";
import smallImage from "./preloading.jpg";
import "./styles.css";
const hdImage = "https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905";
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-iron-image-container">
          <div className="solitude__image-container">
            <IronImage srcPreload={smallImage} src={hdImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
