import React from 'react';

class Followers extends React.Component {
  render() {
    return (
      <div className="followers">
        <h3>Here is a list of people following them.</h3>
        {this.props.followers.map((follower) => {
          return (
            <div key={follower.login} className="follower">
              <h4>
                <a href={follower.html_url}>{follower.login}</a>
              </h4>
              <img src={follower.avatar_url} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Followers;
