import React from 'react';
import Followers from './Followers';

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <h2>
          Current username you are looking at is:{' '}
          <a href={this.props.user.html_url}>{this.props.user.login}</a>
        </h2>
        <Followers followers={this.props.followers} />
      </div>
    );
  }
}

export default User;
