import propTypes from "prop-types";

const MyComponent = ({ name, age }) => {
  //const { valArr } = props;
  return (
    <div>
      <div>MyComponent js is open!!!</div>
      <div>My nickName is {name}</div>
      <div>My age is {age}</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "undefined",
  age: 1
};

MyComponent.PropTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
};

export default MyComponent;
