import './App.css';
import React from 'react';
import axios from 'axios';
import User from './components/User';

// "url": "https://api.github.com/users/octocat"

class App extends React.Component {
  state = {
    username: 'StnsGeneral',
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => this.setState({ user: res.data }))
      .catch((err) => console.error('user get error', err));

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => this.setState({ followers: res.data }))
      .catch((err) => console.error('followers get error', err));
  }

  render() {
    return (
      <div className="App">
        {/* <input type="text" placeholder="Enter a GitHub username" /> */}
        <h1>This is a page about my Github profile.</h1>
        <User user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
