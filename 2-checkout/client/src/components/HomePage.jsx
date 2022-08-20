import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(e) {
    e.preventDefault()
    this.props.changePage(1);
    // here we can axios.post all of the information as we press next?
  }

  render() {
    return (
      <form onSubmit = {this.handleNext}>
      <div>
      <h1>Home Page</h1>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <button>Checkout Here!</button>
    </div>
    </form>
    )
  }
}

export default HomePage;