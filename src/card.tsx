import { Component } from "react";
import "./card.css";
import Indicator from "./indicator.tsx";


class Card extends Component<{ color: string }, { color: string, border: string, }> {
  state: { color: string, border: string, } = {
    color: this.props.color,
    border: "2px solid black"
  };
  changing = () => {
    
    this.setState({border: "5px solid red"})
  }
  render() {
    return (
      <>
        <li onClick={this.changing} className="card" style={{ backgroundColor: this.props.color, border: this.state.border}}></li>
      </>
    );
  }
}
export default Card;
