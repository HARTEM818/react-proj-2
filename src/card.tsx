import { Component } from "react";
import "./card.css"


class Card extends Component<{color: string}> {
  render() {
    return (
      <>
        <li className="card" style={{backgroundColor: this.props.color}}></li>
      </>
    );
  }
}
export default Card