import React from "react"
import Play from "./components/play"
import Users from "./components/users"

class App extends React.Component {
  AllDate = {}
  constructor(props) {
    super(props)
    this.state = {
      users: {
        selectPage: true,
        selectOneX: "",
        nameOne: "",
        nameTwo: "",
      },
    }
    this.showBoard = this.showBoard.bind(this)
    this.showNewUser = this.showNewUser.bind(this)
  }
  render() {
    this.AllDate = this.state.users
    return (
      <div>
        {this.state.users.selectPage ? (
          <Users showBoard={this.showBoard} />
        ) : (
          <Play infoUsers={this.AllDate} showNewUser={this.showNewUser} />
        )}
      </div>
    )
  }
  showBoard = (date) => {
    this.setState({users: date})
  }
  showNewUser = (a) => {
    this.setState({users: a})
  }
}

export default App
