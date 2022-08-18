import React from 'react';

class AddDefinition extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onDefinitionEntryChange(e.target.value)
  }

  render() {
    return(
      <
      input type = "text"
      placeholder = "Definition"
      onChange = {this.handleChange}
       />
    )
  }
}

export default AddDefinition;