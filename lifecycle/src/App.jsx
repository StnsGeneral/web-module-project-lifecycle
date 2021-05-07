import './App.css';
import React from 'react';
import axios from 'axios';
import User from './components/User';
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then((res) => this.setState({ user: res.data }))
        .catch((err) => console.error('user get error', err));

      axios
        .get(`https://api.github.com/users/${this.state.username}/followers`)
        .then((res) => this.setState({ followers: res.data }))
        .catch((err) => console.error('followers get error', err));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <span>Start typing a username</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a GitHub username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>

        <h1>This is a page about for Github profiles.</h1>
        <User user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
