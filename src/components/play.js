import React from "react";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOne: "",
      nameTwo: "",
      selectOneX: false,
      selectOneO: false,
      selectTwoX: false,
      selectTwoO: false,
      selectPage: true,
    };
  }

  render() {
    return (
      <div className="play">
        <div className="userName nameLeft">
          <label>{this.props.infoUsers.nameOne}</label>
          <button className="btn">X</button>
        </div>
        <div>
          <button className="btn newGame">New Games</button>
        </div>
        <div className="userName nameRight">
          <button className="btn">X</button>
          <label>{this.props.infoUsers.nameTwo}</label>
        </div>
      </div>
    );
  }
}
export default Play;
