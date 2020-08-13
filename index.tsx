import React, { Component } from "react";
import { render } from "react-dom";
import PhotoGallary from "./photo-gallary";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="container">
        <PhotoGallary />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
