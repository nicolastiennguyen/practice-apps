import React from 'react';
import axios from 'axios';

class SecondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };
    this.handleChangeAddress1 = this.handleChangeAddress1.bind(this);
    this.handleChangeAddress2 = this.handleChangeAddress2.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChangeAddress1(e) {this.setState({address1: e.target.value})}
  handleChangeAddress2(e) {this.setState({address2: e.target.value})}
  handleChangeCity(e) {this.setState({city: e.target.value})}
  handleChangeState(e) {this.setState({state: e.target.value})}
  handleChangeZip(e) {this.setState({zip: e.target.value})}
  handleChangePhone(e) {this.setState({phone: e.target.value})}

  handleNext(e) {
    e.preventDefault()
    let currentData = {...this.props.rollingData,...this.state};
    this.props.changePage(3, currentData)
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
        <input type = "text" onChange = {this.handleChangeAddress1}/>
        Address Line 2:
        <input type = "text" onChange = {this.handleChangeAddress2}/>
        City
        <input type = "text" onChange = {this.handleChangeCity}/>
        State
        <input type = "text" onChange = {this.handleChangeState}/>
        Zip Code
        <input type = "text" onChange = {this.handleChangeZip}/>
        Phone Number
        <input type = "text" onChange = {this.handleChangePhone}/>
      </label>
      <button>Next</button>
    </div>
    </form>
    )
  }
};


export default SecondForm;