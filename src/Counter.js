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
    const onClickEvent = () => {
      clickEvent();
    };
    function clickEvent() {
      alert("click!!!");
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
        <button onClick={onClickEvent}>click</button>
      </div>
    );
  }
}

export default Counter;
