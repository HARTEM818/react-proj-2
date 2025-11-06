import { Component } from "react";
import "./card.css";
type CardProps = {
  color: string;
  isSelected: boolean;
  onClick: (color: string) => void;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <>
        <div
          className="card"
          onClick={() => this.props.onClick(this.props.color)}
          style={{ backgroundColor: this.props.color, border: this.props.isSelected ? "5px solid red" : "2px solid black" }}
        ></div>
      </>
    );
  }
}
export default Card;
