import React from 'react';
import axios from 'axios';

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email: '',
      password: ''
    };
    this.handleChangeName= this.handleChangeName.bind(this);
    this.handleChangeEmail= this.handleChangeEmail.bind(this);
    this.handleChangePassword= this.handleChangePassword.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChangeName(e) {this.setState({name: e.target.value})}
  handleChangeEmail(e) {this.setState({email: e.target.value})}
  handleChangePassword(e) {this.setState({password: e.target.value})}

  handleNext(e) {
    e.preventDefault()
    this.props.changePage(2, this.state)
  }

  render() {
    return (
      <form onSubmit = {this.handleNext}>
      <div>
      <h1>First Form</h1>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <label>
        <h3>Account Creation:</h3>
        Name:
        <input type = "text" onChange = {this.handleChangeName}/>
        Email:
        <input type = "text" onChange = {this.handleChangeEmail}/>
        Password:
        <input type = "text" onChange = {this.handleChangePassword}/>
      </label>
      <button>Next</button>
    </div>
    </form>
    )
  }
};


export default FirstForm;
