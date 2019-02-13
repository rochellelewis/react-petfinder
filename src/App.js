import React from "react";
import {render} from 'react-dom';
import Pet from "./Pet";

// this is a class component
class App extends React.Component {

  render() {

    //JSX version React.createElement
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Chicken" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

//render code
render(React.createElement(App), document.getElementById("root"));
