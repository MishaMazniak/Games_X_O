import React from "react";

class GameBoard extends React.Component {
  returnInfo = this.props.shiftDate;

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      oneOne: "",
      oneTwo: "",
      oneThree: "",

      twoOne: "",
      twoTwo: "",
      twoThree: "",

      threeOne: "",
      threeTwo: "",
      threeThree: "",
    };
    this.logicPro = this.logicPro.bind(this);
  }

  render() {
    return (
      <div className="playPlace">
        <div id="oneOne" onClick={this.logicPro}>
          {this.state.oneOne}
        </div>
        <div id="oneTwo" onClick={this.logicPro}>
          {this.state.oneTwo}
        </div>
        <div id="oneThree" onClick={this.logicPro}>
          {this.state.oneThree}
        </div>

        <div id="twoOne" onClick={this.logicPro}>
          {this.state.twoOne}
        </div>
        <div id="twoTwo" onClick={this.logicPro}>
          {this.state.twoTwo}
        </div>
        <div id="twoThree" onClick={this.logicPro}>
          {this.state.twoThree}
        </div>

        <div id="threeOne" onClick={this.logicPro}>
          {this.state.threeOne}
        </div>
        <div id="threeTwo" onClick={this.logicPro}>
          {this.state.threeTwo}
        </div>
        <div id="threeThree" onClick={this.logicPro}>
          {this.state.threeThree}
        </div>
      </div>
    );
  }
  logicPro = (e) => {
    if (e.target.id === "oneOne" && this.state.oneOne === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ oneOne: "0" });
      } else {
        this.setState({ oneOne: "X" });
      }
    }
    if (e.target.id === "oneTwo" && this.state.oneTwo === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ oneTwo: "0" });
      } else {
        this.setState({ oneTwo: "X" });
      }
    }
    if (e.target.id === "oneThree" && this.state.oneThree === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ oneThree: "0" });
      } else {
        this.setState({ oneThree: "X" });
      }
    }
    if (e.target.id === "twoOne" && this.state.twoOne === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ twoOne: "0" });
      } else {
        this.setState({ twoOne: "X" });
      }
    }
    if (e.target.id === "twoTwo" && this.state.twoTwo === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ twoTwo: "0" });
      } else {
        this.setState({ twoTwo: "X" });
      }
    }
    if (e.target.id === "twoThree" && this.state.twoThree === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ twoThree: "0" });
      } else {
        this.setState({ twoThree: "X" });
      }
    }
    if (e.target.id === "threeOne" && this.state.threeOne === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ threeOne: "0" });
      } else {
        this.setState({ threeOne: "X" });
      }
    }
    if (e.target.id === "threeTwo" && this.state.threeTwo === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ threeTwo: "0" });
      } else {
        this.setState({ threeTwo: "X" });
      }
    }
    if (e.target.id === "threeThree" && this.state.threeThree === "") {
      if (this.state.step % 2 === 0) {
        this.setState({ threeThree: "0" });
      } else {
        this.setState({ threeThree: "X" });
      }
    }
    this.setState({ step: this.state.step + 1 });
    this.props.saveInfo(this.state);
  };
}
export default GameBoard;
