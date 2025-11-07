import { Component } from "react";
import "./App.css";
import Card from "./card.tsx";
import Indicator from "./indicator.tsx";
import colors from "./colors";

type AppState = {
  selectedColor: string | null;
};

class App extends Component<{}, AppState> {
  state: AppState = {
    selectedColor: null,
  };
  changing = (color: string) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div className="App">
        <Indicator bgColor={this.state.selectedColor}/>
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
