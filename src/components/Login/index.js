import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Header = styled.div`
  background: #bf3742;
  color: white;
  padding: 2em;
`;

const Fields = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1em;

  input,
  button {
    display: block;
    border: 1px solid;
    padding: 5px;
    margin: 0.5em 0;
    width: 100%;
    font-size: 1.5em;
  }

  button {
    background: #bf3742;
    color: white;
    border: 0;
    padding: 1em;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  setToken(token) {
    this.props.setToken(token);
    this.props.history.push('/');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const API_BASE = process.env.REACT_APP_API_BASE;
    const data = `username=${this.state.username}&password=${this.state.password}`;
    fetch(`${API_BASE}jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then(res => res.json())
      .then((res) => {
        this.setToken(res.token);
      });
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Login</h1>
        </Header>
        <form onSubmit={this.handleSubmit}>
          <Fields>
            <li>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </li>
            <button onClick={this.handleSubmit}>Login</button>
          </Fields>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
