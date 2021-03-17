import React from 'react';
import Profile from './components/Profile';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <Profile />
      </div>
    );
  }
}

export default App;
