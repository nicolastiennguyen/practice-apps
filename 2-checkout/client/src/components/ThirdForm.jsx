import React from 'react';
import axios from 'axios';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditcard: '',
      expiry: '',
      cvv: '',
      billingzip: ''
    };
    this.handleChangeCreditCard = this.handleChangeCreditCard.bind(this);
    this.handleChangeExpiry = this.handleChangeExpiry.bind(this);
    this.handleChangeCvv = this.handleChangeCvv.bind(this);
    this.handleChangeBilling = this.handleChangeBilling.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChangeCreditCard(e) {this.setState({creditcard: e.target.value})}
  handleChangeExpiry(e) {this.setState({expiry: e.target.value})}
  handleChangeCvv(e) {this.setState({cvv: e.target.value})}
  handleChangeBilling(e) {this.setState({billingzip: e.target.value})}

  handleNext(e) {
    e.preventDefault()
    let currentData = {...this.props.rollingData, ...this.state}
    axios
      .post('./checkout', currentData)
    this.props.changePage(4, currentData)
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
        <input type = "text" onChange = {this.handleChangeCreditCard}/>
        Expiry Date:
        <input type = "text" onChange = {this.handleChangeExpiry}/>
        CVV:
        <input type = "text" onChange = {this.handleChangeCvv}/>
        Billing Zip Code
        <input type = "text" onChange = {this.handleChangeBilling}/>
      </label>
      <button>Next</button>
    </div>
    </form>
    )
  }
};


export default ThirdForm;