import "./styles.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

/* component import test to function */
// const App = () => {
//   var name = "hash shin";
//   var age = 28;
//   //var valArr = { name, age };
//   return (
//     <div>
//       <MyComponent name={name} age={age} />
//       <div>test temp</div>
//     </div>
//   );
// };

/* use App.js to class */
class App extends Component {
  render() {
    //alert("test");
    //const name = "hash";
    //const number = 10;
    //var animalNameArr = ["t", "a", "c"];
    return (
      <div>
        <div>test view</div>
        test
        <MyComponent />
        <Counter />
      </div>
    );
  }
}

export default App;
