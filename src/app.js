import React from "react";
import {render} from 'react-dom';
import Pet from "./pet";

// this is a class component
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title!");
  }

  render() {
    //these are stamping onto the page
    // return React.createElement(
    //   "div",
    //   {},
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "Dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pepper",
    //     animal: "Bird",
    //     breed: "Cockatiel"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Doink",
    //     animal: "Cat",
    //     breed: "Mixed"
    //   })
    // );

    //JSX version of above
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Chicken" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

// first parent component
/*const App = () => {

}*/

//render code
render(React.createElement(App), document.getElementById("root"));
