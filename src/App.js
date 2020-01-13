import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { AgeFunction } from "./general/variables";

const up = AgeFunction.up;
const down = AgeFunction.down;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: up, value: 2 }),
    onAgeDown: () => dispatch({ type: down, value: 2 })
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
