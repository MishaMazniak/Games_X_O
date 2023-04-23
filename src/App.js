import React from "react";
import Play from "./components/play";
import Users from "./components/users";

class App extends React.Component {
  AllDate = {};
  constructor(props) {
    super(props);
    this.state = {
      users: { selectPage: true, selectOneX: "", nameOne: "", nameTwo: "" },
    };
    this.playShou = this.playShou.bind(this);
  }
  render() {
    this.AllDate = this.state.users;
    return (
      <div>
        {this.state.users.selectPage ? (
          <Users playShou={this.playShou} />
        ) : (
          <Play infoUsers={this.AllDate} />
        )}
      </div>
    );
  }
  playShou = (date) => {
    this.setState({ users: date });
  };
}

export default App;
