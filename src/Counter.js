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
    const num = 0;
    function plus() {}
    function minus() {}
    return (
      <div>
        My nick name is {name}
        <div>{number}</div>
        <button onClick={plus}>PUSH</button>
        <button onClick={minus}>Minus</button>
      </div>
    );
  }
}

export default Counter;
