import React from 'react';
import axios from 'axios';

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    axios
      .get('./checkout')
      .then((res) => this.setState({info: res.data}))
  }

  handleNext(e) {
    e.preventDefault()
    // this.props.changePage(0)
    // console.log(this.state.info)
    // let currentData = this.state.info.map((item) => item.name)
    // console.log(currentData)
  }

  render() {
    let currentData = JSON.stringify(this.state.info)
    return (
      <form onSubmit = {this.handleNext}>
      <div>
      <h1>Confirmation Page</h1>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <div>{currentData}</div>
      <button>Confirm Order</button>
    </div>
    </form>
    )
  }
};


export default ConfirmationPage;