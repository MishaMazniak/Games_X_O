import React from "react";
import GameBoard from "./gameBoard";

class Play extends React.Component {
  dateProps = {
    nameOne: "",
    nameTwo: "",

    selectOne: "",
    selectTwo: "",
    selectOneX: "",

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
    this.selectUsers();
    return (
      <div className="playMain ">
        <div className="playHeader ">
          <div className="userName nameLeft">
            <div>{this.dateProps.nameOne}</div>
            <div>
              <button id="btnLeft" className={this.dateProps.cssOne}>
                {this.dateProps.selectOne}
              </button>
            </div>
          </div>
          <div>
            <button className="newGame btn">New Games</button>
          </div>
          <div className="userName nameRight">
            <div>
              <button id="btnRight" className={this.dateProps.cssTwo}>
                {this.dateProps.selectTwo}
              </button>
            </div>
            <div>{this.dateProps.nameTwo}</div>
          </div>
        </div>
        <div>
          <GameBoard saveInfo={this.saveInfo} />
        </div>
        <div className="futer">
          <div className="futerMain">
            <div className="futerName">
              <div>{this.dateProps.nameOne}</div>
              <div>{this.dateProps.nameTwo}</div>
            </div>
            <div className="futerVictory">
              <div>
                <div>Victory</div>
                <div>0</div>
                <div>0</div>
              </div>
              <button onClick={this.resetBorder}>RESET</button>
            </div>
          </div>
          <div className="futerExit">
            <button>EXIT</button>
          </div>
        </div>
      </div>
    );
  }
  selectUsers = () => {
    this.dateProps.nameOne = this.props.infoUsers.nameOne;
    this.dateProps.nameTwo = this.props.infoUsers.nameTwo;
    this.dateProps.selectOneX = this.props.infoUsers.selectOneX;

    if (this.dateProps.selectOneX === "X") {
      this.dateProps.selectOne = "X";
      this.dateProps.selectTwo = "O";
      this.dateProps.cssOne = "selButton";
      this.dateProps.cssTwo = "empty";
    } else if (this.dateProps.selectOneX === "O") {
      this.dateProps.selectOne = "O";
      this.dateProps.selectTwo = "X";
      this.dateProps.cssOne = "empty";
      this.dateProps.cssTwo = "selButton";
    }
  };

  resetBorder = () => {};
  saveInfo = (info) => {};
}
export default Play;
