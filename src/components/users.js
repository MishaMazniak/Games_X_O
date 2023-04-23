import React from "react";

class Users extends React.Component {
  usersAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      nameOne: "",
      nameTwo: "",
      selectOneX: "",
      selectOneO: "",
      cssOneX: "",
      cssOneO: "",
      cssTwoX: "",
      cssTwoO: "",
      selectPage: false,
    };

    this.selectSymbol = this.selectSymbol.bind(this);
    this.shouPlay = this.shouPlay.bind(this);
  }
  render() {
    return (
      <div className="formMain">
        <form className="formInput">
          <input
            type="text"
            placeholder="First player"
            onChange={(e) => this.setState({ nameOne: e.target.value })}
          />
          <input
            id={this.state.cssOneX}
            type="button"
            value="X"
            name="oneX"
            className="btn"
            onClick={this.selectSymbol}
          />
          <input
            id={this.state.cssOneO}
            type="button"
            value="O"
            name="oneO"
            className="btn"
            onClick={this.selectSymbol}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Second player"
            onChange={(e) => this.setState({ nameTwo: e.target.value })}
          />
          <input
            id={this.state.cssTwoX}
            type="button"
            value="X"
            name="twoX"
            className="btn"
            onClick={this.selectSymbol}
          />
          <input
            id={this.state.cssTwoO}
            type="button"
            value="O"
            name="twoO"
            className="btn"
            onClick={this.selectSymbol}
          />
          <br />
          <br />
          <input
            type="button"
            value="START"
            className="inputStart btn"
            onClick={this.shouPlay}
          />
        </form>
      </div>
    );
  }
  shouPlay = () => {
    this.usersAdd = {
      nameOne: this.state.nameOne,
      nameTwo: this.state.nameTwo,
      selectOneX: this.state.selectOneX,
      selectPage: this.state.selectPage,
    };
    this.state.nameOne !== "" &&
    this.state.nameTwo !== "" &&
    this.state.selectOneX !== "" &&
    this.state.selectOneO !== ""
      ? this.props.playShou(this.usersAdd)
      : console.log(alert("Fill in the date"));
  };
  selectSymbol = (el) => {
    if (el.target.name === "oneX" || el.target.name === "twoO") {
      this.setState({ cssOneX: "selectButton" });
      this.setState({ cssTwoO: "selectButton" });
      this.setState({ selectOneX: "X" });
      this.setState({ selectOneO: "O" });
      this.setState({ cssOneO: "" });
      this.setState({ cssTwoX: "" });
    }
    if (el.target.name === "oneO" || el.target.name === "twoX") {
      this.setState({ cssOneO: "selectButton" });
      this.setState({ cssTwoX: "selectButton" });
      this.setState({ selectOneO: "X" });
      this.setState({ selectOneX: "O" });
      this.setState({ cssOneX: "" });
      this.setState({ cssTwoO: "" });
    }
  };
}
export default Users;
