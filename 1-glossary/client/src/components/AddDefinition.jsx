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
// class AddDefinition extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       definitionEntry: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     console.log(e.target.value)
//   }

//   render() {
//     return(
//       <
//       input type = "text"
//       placeholder = "Definition"
//       onChange = {this.handleChange}
//        />
//     )
//   }
// }

export default AddDefinition;