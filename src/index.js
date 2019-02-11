import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // official docs say you shouldn't do data loading in the constructor
  // because you should centralize where calls are made, and not all
  // components do not have a constructor (function components)
  // constructor(props) {
  //   super(props);

  //   // when we want to default numbers we use null
  //   this.state = {
  //     lat: null,
  //     errorMessage: ""
  //   };
  // }

  state = {
    lat: null,
    errorMessage: ""
  };

  // used one time when the page loads
  // used to load data
  componentDidMount() {
    console.log("My component was rendered to the screen");

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // used every time the page is rerendered
  // used data loading when data needs to update
  componentDidUpdate() {
    console.log("My componet was just updated - it rerendered");
  }

  // used when the component is no loger shown
  // good for clean up
  componentWillUnmount() {
    console.log("My component was just unmounted");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
