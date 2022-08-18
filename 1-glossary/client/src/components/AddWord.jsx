import React from 'react';

class AddWord extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onWordEntryChange(e.target.value)
  }

  render() {
    return(
      <
      input type = "text"
      placeholder = "Word"
      onChange = {this.handleChange}
    />
    )
  }
}

export default AddWord;