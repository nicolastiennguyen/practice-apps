import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(e) {
    e.preventDefault()
    this.props.changePage(1);
  }

  render() {
    return (
      <form onSubmit = {this.handleNext}>
      <div>
      <h1>Home Page</h1>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <button onSubmit = {this.handleNext}>Next</button>
    </div>
    </form>
    )
  }
}

export default HomePage;