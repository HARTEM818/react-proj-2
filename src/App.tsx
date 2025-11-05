import { Component } from "react";
import Card from "./card.tsx";
import colors from "./colors.ts";
import "./App.css";
import Indicator from "./indicator.tsx";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Indicator />
        <ul className="list">
          {colors.map((el, index) => {
            return <Card key={index} color={el} />;
          })}
        </ul>
      </div>
    );
  }
}
export default App;
