import { string } from "prop-types";
import React, { Component } from "react";

class Counter extends Component {
  // state init value setting
  constructor(props) {
    super(props);
    this.state = {
      name: "hash shin",
      number: 0
    };
  }

  render() {
    const { name, number } = this.state;
    function countUp() {
      this.setState({ number: number + 1 });
    }
    return (
      <div>
        My nick name is {name}
        <div>{number}</div>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          PUSH
        </button>
      </div>
    );
  }
}

export default Counter;
