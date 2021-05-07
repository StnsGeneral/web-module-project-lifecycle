import React from 'react';
import Followers from './Followers';

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <h2>My username on Github is {this.props.user.login}</h2>
        <Followers followers={this.props.followers} />
      </div>
    );
  }
}

export default User;
