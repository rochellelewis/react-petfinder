import React from "react";
import {render} from 'react-dom';

//these components are akin to classes. This is a function component
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

// this is a class component
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title!");
  }

  render() {
    //these are stamping onto the page
    return React.createElement(
      "div",
      { id: "my-id" },
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    );
  }
}

// first parent component
/*const App = () => {

}*/

//render code
render(React.createElement(App), document.getElementById("root"));
