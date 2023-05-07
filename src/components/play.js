import React from "react";
import GameBoard from "./gameBoard";

class Play extends React.Component {
  //  dateProps  -  Імена іграків та вибрані ними знаки (Х/О)

  dateProps = {
    nameOne: "",
    nameTwo: "",
    selectOneX: "",

    selectOne: "",
    selectTwo: "",
  };
  shiftDate = {
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
              <button id="btnLeft" className={this.shiftDate.cssOne}>
                {this.dateProps.selectOne}
              </button>
            </div>
          </div>
          <div>
            <button className="newGame btn" onClick={this.newGame}>
              New Games
            </button>
          </div>
          <div className="userName nameRight">
            <div>
              <button id="btnRight" className={this.shiftDate.cssTwo}>
                {this.dateProps.selectTwo}
              </button>
            </div>
            <div>{this.dateProps.nameTwo}</div>
          </div>
        </div>
        <div>
          <GameBoard saveInfo={this.saveInfo} shiftDate={this.shiftDate} />
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
              <button onClick={this.resetVictory}>RESET</button>
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
      if (this.shiftDate.step % 2 !== 0) {
        this.shiftDate.cssOne = "selButton";
        this.shiftDate.cssTwo = "empty";
      } else {
        this.shiftDate.cssOne = "empty";
        this.shiftDate.cssTwo = "selButton";
      }
    } else if (this.dateProps.selectOneX === "O") {
      this.dateProps.selectOne = "O";
      this.dateProps.selectTwo = "X";
      if (this.shiftDate.step % 2 !== 0) {
        this.shiftDate.cssOne = "empty";
        this.shiftDate.cssTwo = "selButton";
      }
      if (this.shiftDate.step % 2 === 0) {
        this.shiftDate.cssOne = "selButton";
        this.shiftDate.cssTwo = "empty";
      }
    }
  };

  saveInfo = (info) => {
    this.shiftDate = info;

    this.selectUsers();
  };
  newGame = () => {};
  resetVictory = () => {};
}
export default Play;
