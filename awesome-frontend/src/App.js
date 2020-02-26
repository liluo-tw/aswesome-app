import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getMemberInfo } from './apiRequests'
const queryString = require('query-string');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { member: "" };

  }

  componentDidMount() {
    const searchParams = queryString.parse(this.props.location.search);
    const memberId = searchParams.id
    if (memberId === undefined) {
      return
    }
    getMemberInfo(memberId)
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
