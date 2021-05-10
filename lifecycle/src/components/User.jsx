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
        {this.props.user.bio && <p>About: {this.props.user.bio}</p>}
        {this.props.user.location && (
          <p>Location: {this.props.user.location}</p>
        )}
        {this.props.user.public_repos && (
          <p>Repos: {this.props.user.public_repos}</p>
        )}
        {this.props.user.following && (
          <p>Following: {this.props.user.following}</p>
        )}
        {this.props.user.followers && (
          <p>Followers: {this.props.user.followers}</p>
        )}

        <Followers followers={this.props.followers} />
      </div>
    );
  }
}

export default User;
