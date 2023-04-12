import React from "react";

class Users extends React.Component {
  usersAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      nameOne: "",
      nameTwo: "",
      selectOneX: false,
      selectOneO: false,
      selectTwoX: false,
      selectTwoO: false,
      selectPage: false,
      cssOneX: "",
      cssOneO: "",
      cssTwoX: "",
      cssTwoO: "",
    };

    this.selectSymbol = this.selectSymbol.bind(this);
    this.shouPlay = this.shouPlay.bind(this);
  }
  render() {
    return (
      <div>
        <div id="InputForm">
          <form>
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) => this.setState({ nameOne: e.target.value })}
            />
            <input
              id="oneXX"
              type="button"
              value="X"
              name="oneX"
              className={this.state.cssOneX}
              onClick={this.selectSymbol}
            />
            <input
              id="oneOO"
              type="button"
              value="O"
              name="oneO"
              className={this.state.cssOneO}
              onClick={this.selectSymbol}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) => this.setState({ nameTwo: e.target.value })}
            />
            <input
              id="twoXX"
              type="button"
              value="X"
              name="twoX"
              className={this.state.cssTwoX}
              onClick={this.selectSymbol}
            />
            <input
              id="twoOO"
              type="button"
              value="O"
              name="twoO"
              className={this.state.cssTwoO}
              onClick={this.selectSymbol}
            />
            <br />
            <br />
            <input
              type="button"
              value="START"
              className="btn"
              onClick={this.shouPlay}
            />
          </form>
        </div>
      </div>
    );
  }
  shouPlay = () => {
    this.usersAdd = {
      nameOne: this.state.nameOne,
      nameTwo: this.state.nameTwo,
      selectOneX: this.state.selectOneX,
      selectOneO: this.state.selectOneO,
      selectTwoX: this.state.selectTwoX,
      selectTwoO: this.state.selectTwoO,
      selectPage: this.state.selectPage,
    };
    (this.state.nameOne !== "" &&
      this.state.nameTwo !== "" &&
      this.state.selectOneX) ||
    this.state.selectOneO
      ? this.props.playShou(this.usersAdd)
      : console.log(alert("Fill in the data"));
  };
  selectSymbol = (el) => {
    if (el.target.name === "oneX" || el.target.name === "twoO") {
      this.setState({ cssOneX: "selectButton" });
      this.setState({ cssTwoO: "selectButton" });
      this.setState({ selectOneX: true });
      this.setState({ selectTwoO: true });
      this.setState({ selectOneO: false });
      this.setState({ selectTwoX: false });
      this.setState({ cssOneO: "" });
      this.setState({ cssTwoX: "" });
    }
    if (el.target.name === "oneO" || el.target.name === "twoX") {
      this.setState({ cssOneO: "selectButton" });
      this.setState({ cssTwoX: "selectButton" });
      this.setState({ selectOneO: true });
      this.setState({ selectTwoX: true });
      this.setState({ selectOneX: false });
      this.setState({ selectTwoO: false });
      this.setState({ cssOneX: "" });
      this.setState({ cssTwoO: "" });
    }
  };
}
export default Users;
