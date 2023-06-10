import React from "react"
// import {useState} from "react"
// import GameBoard from "./gameBoard";

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      stop_play: 0,

      oneOne: "",
      oneTwo: "",
      oneThree: "",

      twoOne: "",
      twoTwo: "",
      twoThree: "",

      threeOne: "",
      threeTwo: "",
      threeThree: "",

      cssOne: "",
      cssTwo: "",

      victory_x: 0,
      victory_o: 0,

      // ______ Variables css for the winner  ___________________

      oneOneCss: "BackCss",
      oneTwoCss: "BackCss",
      oneThreeCss: "BackCss",

      twoOneCss: "BackCss",
      twoTwoCss: "BackCss",
      twoThreeCss: "BackCss",

      threeOneCss: "BackCss",
      threeTwoCss: "BackCss",
      threeThreeCss: "BackCss",

      cssOne: "",
      cssTwo: "",
    }

    this.logicPro = this.logicPro.bind(this)
    this.selectUsers = this.selectUsers.bind(this)
    this.newGame = this.newGame.bind(this)
    this.resetVictory = this.resetVictory.bind(this)
    this.exit = this.exit.bind(this)
    this.checkResoult = this.checkResoult.bind(this)
  }
  //  _____ Name players and their x/o ____________________________________________ */}

  dateProps = {
    nameOne: "",
    nameTwo: "",
    selectOneX: "",

    selectOne: "",
    selectTwo: "",

    selectPage: true,
  }
  render() {
    this.selectUsers()
    return (
      <div className="playMain ">
        {/* ________________________Header ___________________________ */}

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

        {/* _____________________ Play place _________________________________ */}

        <div className="playPlace">
          <div
            id="oneOne"
            onClick={this.logicPro}
            className={this.state.oneOneCss}
          >
            {this.state.oneOne}
          </div>
          <div
            id="oneTwo"
            onClick={this.logicPro}
            className={this.state.oneTwoCss}
          >
            {this.state.oneTwo}
          </div>
          <div
            id="oneThree"
            onClick={this.logicPro}
            className={this.state.oneThreeCss}
          >
            {this.state.oneThree}
          </div>

          <div
            id="twoOne"
            onClick={this.logicPro}
            className={this.state.twoOneCss}
          >
            {this.state.twoOne}
          </div>
          <div
            id="twoTwo"
            onClick={this.logicPro}
            className={this.state.twoTwoCss}
          >
            {this.state.twoTwo}
          </div>
          <div
            id="twoThree"
            onClick={this.logicPro}
            className={this.state.twoThreeCss}
          >
            {this.state.twoThree}
          </div>

          <div
            id="threeOne"
            onClick={this.logicPro}
            className={this.state.threeOneCss}
          >
            {this.state.threeOne}
          </div>
          <div
            id="threeTwo"
            onClick={this.logicPro}
            className={this.state.threeTwoCss}
          >
            {this.state.threeTwo}
          </div>
          <div
            id="threeThree"
            onClick={this.logicPro}
            className={this.state.threeThreeCss}
          >
            {this.state.threeThree}
          </div>
        </div>

        {/* ________________________ Footer ____________________________ */}

        <div className="footer">
          <div className="footerMain">
            <div className="footerName">
              <div>{this.dateProps.nameOne}</div>
              <div>{this.dateProps.nameTwo}</div>
            </div>
            <div className="footerVictory">
              <div>
                <div>Victory</div>
                <div>{this.state.victory_x}</div>
                <div>{this.state.victory_o}</div>
              </div>
              <button onClick={this.resetVictory}>RESET</button>
            </div>
          </div>
          <div className="footerExit">
            <button onClick={this.exit}>EXIT</button>
          </div>
        </div>
      </div>
    )
  }
  selectUsers = () => {
    /* _________ Save data players _____________________________________________________________ */

    this.dateProps.nameOne = this.props.infoUsers.nameOne
    this.dateProps.nameTwo = this.props.infoUsers.nameTwo
    this.dateProps.selectOneX = this.props.infoUsers.selectOneX

    /* _________ Change of move _____________________________________________________________ */

    if (this.dateProps.selectOneX === "X") {
      this.dateProps.selectOne = "X"
      this.dateProps.selectTwo = "O"
      if (this.state.step % 2 !== 0) {
        this.state.cssOne = "selButton"
        this.state.cssTwo = "empty"
      } else {
        this.state.cssOne = "empty"
        this.state.cssTwo = "selButton"
      }
    } else if (this.dateProps.selectOneX === "O") {
      this.dateProps.selectOne = "O"
      this.dateProps.selectTwo = "X"
      if (this.state.step % 2 !== 0) {
        this.state.cssOne = "empty"
        this.state.cssTwo = "selButton"
      } else {
        this.state.cssOne = "selButton"
        this.state.cssTwo = "empty"
      }
    }
  }
  /* _________ Player's turn _______________________________________________ */

  logicPro = (e) => {
    if (
      e.target.id === "oneOne" &&
      this.state.oneOne === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({oneOne: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({oneOne: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "oneTwo" &&
      this.state.oneTwo === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({oneTwo: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({oneTwo: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "oneThree" &&
      this.state.oneThree === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({oneThree: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({oneThree: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "twoOne" &&
      this.state.twoOne === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({twoOne: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({twoOne: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "twoTwo" &&
      this.state.twoTwo === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({twoTwo: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({twoTwo: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "twoThree" &&
      this.state.twoThree === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({twoThree: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({twoThree: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "threeOne" &&
      this.state.threeOne === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({threeOne: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({threeOne: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "threeTwo" &&
      this.state.threeTwo === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({threeTwo: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({threeTwo: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    } else if (
      e.target.id === "threeThree" &&
      this.state.threeThree === "" &&
      this.state.stop_play === 0
    ) {
      if (this.state.step % 2 === 0) {
        this.setState({threeThree: "O"})
        this.setState({step: this.state.step + 1})
      } else {
        this.setState({threeThree: "X"})
        this.setState({step: this.state.step + 1})
      }
      this.checkResoult()
    }
  }

  /* _________ Refresh the field _____________________________________________________________ */

  newGame = () => {
    this.setState({step: 1})
    this.setState({stop_play: 0})

    this.setState({oneOne: ""})
    this.setState({oneTwo: ""})
    this.setState({oneThree: ""})

    this.setState({twoOne: ""})
    this.setState({twoTwo: ""})
    this.setState({twoThree: ""})

    this.setState({threeOne: ""})
    this.setState({threeTwo: ""})
    this.setState({threeThree: ""})

    this.setState({oneOneCss: "BackCss"})
    this.setState({oneTwoCss: "BackCss"})
    this.setState({oneThreeCss: "BackCss"})

    this.setState({twoOneCss: "BackCss"})
    this.setState({twoTwoCss: "BackCss"})
    this.setState({twoThreeCss: "BackCss"})

    this.setState({threeOneCss: "BackCss"})
    this.setState({threeTwoCss: "BackCss"})
    this.setState({threeThreeCss: "BackCss"})
  }

  /* _________ The logic of victory _____________________________________________________________ */

  checkResoult = () => {
    /* _________ XXX ______________ */

    if (
      this.state.oneOne == "X" &&
      this.state.oneTwo == "X" &&
      this.state.oneThree == "X"
    ) {
      this.setState({oneOneCss: "BackVictiryCss"})
      this.setState({oneTwoCss: "BackVictiryCss"})
      this.setState({oneThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.twoOne == "X" &&
      this.state.twoTwo == "X" &&
      this.state.twoThree == "X"
    ) {
      this.setState({twoOneCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({twoThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.threeOne == "X" &&
      this.state.threeTwo == "X" &&
      this.state.threeThree == "X"
    ) {
      this.setState({threeOneCss: "BackVictiryCss"})
      this.setState({threeTwoCss: "BackVictiryCss"})
      this.setState({threeThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.oneOne == "X" &&
      this.state.twoOne == "X" &&
      this.state.threeOne == "X"
    ) {
      this.setState({oneOneCss: "BackVictiryCss"})
      this.setState({twoOneCss: "BackVictiryCss"})
      this.setState({threeOneCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.oneTwo == "X" &&
      this.state.twoTwo == "X" &&
      this.state.threeTwo == "X"
    ) {
      this.setState({oneTwoCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({threeTwoCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.oneThree == "X" &&
      this.state.twoThree == "X" &&
      this.state.threeThree == "X"
    ) {
      this.setState({oneThreeCss: "BackVictiryCss"})
      this.setState({twoThreeCss: "BackVictiryCss"})
      this.setState({threeThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.oneOne == "X" &&
      this.state.twoTwo == "X" &&
      this.state.threeThree == "X"
    ) {
      this.setState({oneOneCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({threeThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})
    } else if (
      this.state.threeOne == "X" &&
      this.state.twoTwo == "X" &&
      this.state.oneThree == "X"
    ) {
      this.setState({threeOneCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({oneThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_x: this.state.victory_x + 1})

      /* _________ OOO ______________ */
    } else if (
      this.state.oneOne == "O" &&
      this.state.oneTwo == "O" &&
      this.state.oneThree == "O"
    ) {
      this.setState({oneOneCss: "BackVictiryCss"})
      this.setState({oneTwoCss: "BackVictiryCss"})
      this.setState({oneThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.twoOne == "O" &&
      this.state.twoTwo == "O" &&
      this.state.twoThree == "O"
    ) {
      this.setState({twoOneCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({twoThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.threeOne == "O" &&
      this.state.threeTwo == "O" &&
      this.state.threeThree == "O"
    ) {
      this.setState({threeOneCss: "BackVictiryCss"})
      this.setState({threeTwoCss: "BackVictiryCss"})
      this.setState({threeThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.oneOne == "O" &&
      this.state.twoOne == "O" &&
      this.state.threeOne == "O"
    ) {
      this.setState({oneOneCss: "BackVictiryCss"})
      this.setState({twoOneCss: "BackVictiryCss"})
      this.setState({threeOneCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.oneTwo == "O" &&
      this.state.twoTwo == "O" &&
      this.state.threeTwo == "O"
    ) {
      this.setState({oneTwoCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({threeTwoCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.oneThree == "O" &&
      this.state.twoThree == "O" &&
      this.state.threeThree == "O"
    ) {
      this.setState({oneThreeCss: "BackVictiryCss"})
      this.setState({twoThreeCss: "BackVictiryCss"})
      this.setState({threeThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.oneOne == "O" &&
      this.state.twoTwo == "O" &&
      this.state.threeThree == "O"
    ) {
      this.setState({oneOneCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({threeThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    } else if (
      this.state.threeOne == "O" &&
      this.state.twoTwo == "O" &&
      this.state.oneThree == "O"
    ) {
      this.setState({threeOneCss: "BackVictiryCss"})
      this.setState({twoTwoCss: "BackVictiryCss"})
      this.setState({oneThreeCss: "BackVictiryCss"})
      this.setState({stop_play: 1})
      this.setState({victory_o: this.state.victory_o + 1})
    }
  }

  /* _________ Reset the account _____________________________________________________________ */

  resetVictory = () => {
    this.setState({victory_x: 0})
    this.setState({victory_o: 0})
  }

  /* _________ Exit _____________________________________________________________ */

  exit = () => {
    this.props.showNewUser(this.dateProps)
  }
}
export default Play
