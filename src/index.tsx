import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import { MyClassComponent } from "./level-one/my-class-component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyClassComponent />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
