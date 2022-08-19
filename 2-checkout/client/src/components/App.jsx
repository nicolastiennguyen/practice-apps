import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // set this bindings here

  render() {
    return (
      <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
    </div>
    )
  }
}

export default App;