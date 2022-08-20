import React from 'react';

class SecondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(e) {
    e.preventDefault()
    this.props.changePage(3)
  }

  render() {
    return (
      <form onSubmit = {this.handleNext}>
      <div>
      <h1>Second Form</h1>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <h3>Enter in your Shipping Information:</h3>
      <label>
        Address Line 1:
        <input type = "text" />
        Address Line 2:
        <input type = "text" />
        City
        <input type = "text" />
        State
        <input type = "text" />
        Zip Code
        <input type = "text" />
        Phone Number
        <input type = "text" />
      </label>
      <button>Next</button>
    </div>
    </form>
    )
  }
};


export default SecondForm;