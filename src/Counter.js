import { String } from "prop-types";
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
    function plus() {
      tempfunc("plus");
    }
    function minus() {
      tempfunc("minus");
    }

    const tempfunc = (value) => {
      if (value === "plus") {
        this.setState({
          number: number + 1
        });
      }
      if (value === "minus") {
        this.setState({
          number: number - 1
        });
      }
    };

    return (
      <div>
        My nick name is {name}
        <div>{number}</div>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
      </div>
    );
  }
}

export default Counter;
