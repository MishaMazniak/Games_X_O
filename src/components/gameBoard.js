import React from "react";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  returnInfo = {
    cssOne: "",
    cssTwo: "",

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
    if (e.target.id === "oneOne" && this.returnInfo.oneOne === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.oneOne = "0";
        this.setState({ oneOne: this.returnInfo.oneOne });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.oneOne = "X";
        this.setState({ oneOne: this.returnInfo.oneOne });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "oneTwo" && this.returnInfo.oneTwo === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.oneTwo = "0";
        this.setState({ oneTwo: this.returnInfo.oneTwo });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.oneTwo = "X";
        this.setState({ oneTwo: this.returnInfo.oneTwo });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "oneThree" && this.returnInfo.oneThree === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.oneThree = "0";
        this.setState({ oneThree: this.returnInfo.oneThree });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.oneThree = "X";
        this.setState({ oneThree: this.returnInfo.oneThree });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "twoOne" && this.returnInfo.twoOne === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.twoOne = "0";
        this.setState({ twoOne: this.returnInfo.twoOne });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.twoOne = "X";
        this.setState({ twoOne: this.returnInfo.twoOne });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "twoTwo" && this.returnInfo.twoTwo === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.twoTwo = "0";
        this.setState({ twoTwo: this.returnInfo.twoTwo });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.twoTwo = "X";
        this.setState({ twoTwo: this.returnInfo.twoTwo });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "twoThree" && this.returnInfo.twoThree === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.twoThree = "0";
        this.setState({ twoThree: this.returnInfo.twoThree });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.twoThree = "X";
        this.setState({ twoThree: this.returnInfo.twoThree });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "threeOne" && this.returnInfo.threeOne === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.threeOne = "0";
        this.setState({ threeOne: this.returnInfo.threeOne });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.threeOne = "X";
        this.setState({ threeOne: this.returnInfo.threeOne });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "threeTwo" && this.returnInfo.threeTwo === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.threeTwo = "0";
        this.setState({ threeTwo: this.returnInfo.threeTwo });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.threeTwo = "X";
        this.setState({ threeTwo: this.returnInfo.threeTwo });
        this.returnInfo.step += 1;
      }
    }
    if (e.target.id === "threeThree" && this.returnInfo.threeThree === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.returnInfo.threeThree = "0";
        this.setState({ threeThree: this.returnInfo.threeThree });
        this.returnInfo.step += 1;
      } else {
        this.returnInfo.threeThree = "X";
        this.setState({ threeThree: this.returnInfo.threeThree });
        this.returnInfo.step += 1;
      }
    }
  };
}
export default GameBoard;
