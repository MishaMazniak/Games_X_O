import React from "react";

class GameBoard extends React.Component {
  returnInfo = this.props.shiftDate;
  goPlay = {
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
  sts = this.props.sts;
  render() {
    return (
      <div className="playPlace">
        <div id="oneOne" onClick={this.logicPro}>
          {this.sts.oneOne}
        </div>
        <div id="oneTwo" onClick={this.logicPro}>
          {this.sts.oneTwo}
        </div>
        <div id="oneThree" onClick={this.logicPro}>
          {this.sts.oneThree}
        </div>

        <div id="twoOne" onClick={this.logicPro}>
          {this.sts.twoOne}
        </div>
        <div id="twoTwo" onClick={this.logicPro}>
          {this.sts.twoTwo}
        </div>
        <div id="twoThree" onClick={this.logicPro}>
          {this.sts.twoThree}
        </div>

        <div id="threeOne" onClick={this.logicPro}>
          {this.sts.threeOne}
        </div>
        <div id="threeTwo" onClick={this.logicPro}>
          {this.sts.threeTwo}
        </div>
        <div id="threeThree" onClick={this.logicPro}>
          {this.sts.threeThree}
        </div>
      </div>
    );
  }
  logicPro = (e) => {
    if (e.target.id === "oneOne" && this.returnInfo.oneOne === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.oneOne = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.oneOne = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "oneTwo" && this.returnInfo.oneTwo === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.oneTwo = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.oneTwo = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "oneThree" && this.returnInfo.oneThree === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.oneThree = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.oneThree = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "twoOne" && this.returnInfo.twoOne === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.twoOne = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.twoOne = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "twoTwo" && this.returnInfo.twoTwo === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.twoTwo = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.twoTwo = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "twoThree" && this.returnInfo.twoThree === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.twoThree = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.twoThree = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "threeOne" && this.returnInfo.threeOne === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.threeOne = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.threeOne = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "threeTwo" && this.returnInfo.threeTwo === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.threeTwo = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.threeTwo = "X";
        this.goPlay.step += 1;
      }
    }
    if (e.target.id === "threeThree" && this.returnInfo.threeThree === "") {
      if (this.returnInfo.step % 2 === 0) {
        this.goPlay.threeThree = "0";
        this.goPlay.step += 1;
      } else {
        this.goPlay.threeThree = "X";
        this.goPlay.step += 1;
      }
    }

    this.props.saveInfo(this.goPlay);
  };
}
export default GameBoard;
