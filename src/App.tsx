import { Component } from "react";
import "./App.css";
import Card from "./card.tsx";
import colors from "./colors";

type AppState = {
  selectedColor: string;
};

class App extends Component<{}, AppState> {
  state: AppState = {
    selectedColor: "",
  };
  changing = (color: string) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div className="App">
        {colors.map((el) => {
          return (
            <Card onClick={this.changing} isSelected={this.state.selectedColor === el} color={el} />
          );
        })}
      </div>
    );
  }
}
export default App;
