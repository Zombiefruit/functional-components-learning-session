import * as React from "react";
import { render } from "react-dom";
import { MyClassComponent } from "./class-comp-stage-one";
// import { MyClassComponent } from "./class-comp-stage-two";
// import { MyFunctionalComponent } from "./func-comp";

import "./styles.css";

class App extends React.Component {
  state = {
    fahrenheit: false
  };

  onTempToggle = () => {
    this.setState({ fahrenheit: !this.state.fahrenheit });
  };

  render() {
    return (
      <div className="App">
        {/* <div>
          <label>Fahrenheit?</label>
          <input
            name="temp"
            type="checkbox"
            checked={this.state.fahrenheit}
            onChange={this.onTempToggle}
          />
        </div> */}
        <MyClassComponent />
        {/* <MyClassComponent fahrenheit={this.state.fahrenheit} /> */}
        {/* <MyFunctionalComponent fahrenheit={this.state.fahrenheit} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
