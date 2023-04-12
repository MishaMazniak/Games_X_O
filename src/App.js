import React from "react";
import Play from "./components/play";
import Users from "./components/users";

class App extends React.Component {
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
    this.playShou = this.playShou.bind(this);
  }
  render() {
    return (
      <div>
        {this.state.selectPage ? (
          <Users playShou={this.playShou} />
        ) : (
          <Play infoUsers={this.state} />
        )}
      </div>
    );
  }
  playShou = (date) => {
    this.setState({ nameOne: date.nameOne });
    this.setState({ nameTwo: date.nameTwo });
    this.setState({ selectOneX: date.selectOneX });
    this.setState({ selectOneO: date.selectOneO });
    this.setState({ selectTwoX: date.selectTwoX });
    this.setState({ selectTwoO: date.selectTwoO });
    this.setState({ selectPage: date.selectPage });
  };
}

export default App;
