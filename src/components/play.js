import React from "react";
import GameBoard from "./gameBoard";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.selectUsers = this.selectUsers.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  dateProps = {
    nameOne: "",
    nameTwo: "",

    selectOne: "",
    selectTwo: "",
    selectOneX: "",
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
              <button id="btnLeft" className={this.state.cssOne}>
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
              <button id="btnRight" className={this.state.cssTwo}>
                {this.dateProps.selectTwo}
              </button>
            </div>
            <div>{this.dateProps.nameTwo}</div>
          </div>
        </div>
        <div>
          <GameBoard
            saveInfo={this.saveInfo}
            shiftDate={this.shiftDate}
            sts={this.state}
          />
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
        this.state.cssOne = "selButton";
        this.state.cssTwo = "empty";
      } else {
        this.state.cssOne = "empty";
        this.state.cssTwo = "selButton";
      }
    } else if (this.dateProps.selectOneX === "O") {
      this.dateProps.selectOne = "O";
      this.dateProps.selectTwo = "X";
      if (this.shiftDate.step % 2 !== 0) {
        this.state.cssOne = "empty";
        this.state.cssTwo = "selButton";
      }
      if (this.shiftDate.step % 2 === 0) {
        this.state.cssOne = "selButton";
        this.state.cssTwo = "empty";
      }
    }
  };

  saveInfo = (info) => {
    this.shiftDate = info;

    this.setState({ step: info.step });

    this.setState({ oneOne: info.oneOne });
    this.setState({ oneTwo: info.oneTwo });
    this.setState({ oneThree: info.oneThree });

    this.setState({ twoOne: info.twoOne });
    this.setState({ twoTwo: info.twoTwo });
    this.setState({ twoThree: info.twoThree });

    this.setState({ threeOne: info.threeOne });
    this.setState({ threeTwo: info.threeTwo });
    this.setState({ threeThree: info.threeThree });

    this.selectUsers();
  };
  newGame = () => {
    this.shiftDate = {
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
    this.setState({ step: 1 });

    this.setState({ oneOne: "" });
    this.setState({ oneTwo: "" });
    this.setState({ oneThree: "" });

    this.setState({ twoOne: "" });
    this.setState({ twoTwo: "" });
    this.setState({ twoThree: "" });

    this.setState({ threeOne: "" });
    this.setState({ threeTwo: "" });
    this.setState({ threeThree: "" });
  };
  resetVictory = () => {
    this.setState({ oneOne: "123" });
    console.log(this.state.oneOne);
  };
}
export default Play;
