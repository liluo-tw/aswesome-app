import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getMemberInfo } from './apiRequests'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { member: "" };
  }

  componentDidMount() {
    getMemberInfo("666666")
      .then(response => response.json())
      .then(data => {
        this.setState({ member: data })
      });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here to load member info.
            </p>

        </header>
        <div className="member">
          {JSON.stringify(this.state.member, null, 2)}
        </div>
      </div>
    );
  }
}

export default App;
