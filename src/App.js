import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

// V I S I B L E   C O N T E N T  CONTAINED W/IN APP CLASS
class App extends Component {
  render() {

    return (
      // JSX CODE LIVES HERE ▼ THE RETURN VALUE
      <div className="App">

        <header className="App-header">
          {/* THIS IS ALL JAVASCRIPT ↙ */}
          {moment().format('MMMM Do YYYY, hh:mm:ss a')}
        </header>

        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>

        <ExampleComponent /> {/* ◄ USE THE C O N T E N T S OF COMPONENT */}
        <ExampleComponent />

      </div>
    );
  }
}

export default App;
