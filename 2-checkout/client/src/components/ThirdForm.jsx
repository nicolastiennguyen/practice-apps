import React from 'react';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(e) {
    e.preventDefault()
    this.props.changePage(4)
  }

  render() {
    return (
      <form onSubmit = {this.handleNext}>
      <div>
      <h1>Third Form</h1>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <h3>Enter in your Billing Information:</h3>
      <label>
        Credit Card Number:
        <input type = "text" />
        Expiry Date:
        <input type = "text" />
        CVV:
        <input type = "text" />
        Billing Zip Code
        <input type = "text" />
      </label>
      <button>Next</button>
    </div>
    </form>
    )
  }
};


export default ThirdForm;