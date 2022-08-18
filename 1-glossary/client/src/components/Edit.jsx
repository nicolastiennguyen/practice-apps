import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('working')
  }

  render() {
    return(
      <button onClick = {this.handleClick}> edit </button>
    )
  }



}

export default Edit;