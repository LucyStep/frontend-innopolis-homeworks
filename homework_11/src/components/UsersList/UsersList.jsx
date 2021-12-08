import React from 'react';
import CardList from "../CardList/CardList";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?per_page=12')
      .then((response) => response.json())
      .then((result) => {
        this.setState({users: result.data});
      })
  }

  renderUsers() {
    return <CardList userList={this.state.users}/>
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}
