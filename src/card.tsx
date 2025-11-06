import { Component } from "react";
import "./card.css";
type CardProps = {
  color: string;
}

class Card extends Component<CardProps> {
 
  render() {
    return (
      <>
        <div className="card">

        </div>
      </>
    );
  }
}
export default Card;
