import { Component } from "react";
import "./indicator.css";

class Indicator extends Component<{bgColor: string | null}> {
  
  render() {
    return <div className="indicator" style={{backgroundColor: this.props.bgColor === null ? "" : this.props.bgColor}}></div>;
  }
}
export default Indicator;
