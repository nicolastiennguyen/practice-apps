import React from 'react';

class TermEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false
    };
    // this.changeEditMode = this.changeEditMode.bind(this)
    // this.updateTerm = this.updateTerm.bind(this)
  }

  // changeEditMode = () => {
  //   this.setState({
  //     inEditMode: !this.state.inEditMode
  //   })
  // }

  // updateTerm = () => {
  //   this.setState({
  //     inEditMode: false
  //   })
  // }

  render() {
    let term = this.props.DisplayedTerms.map((item) =>
    <div>
      {item.word + ': ' + item.definition}
    </div>
    )

    // return this.state.inEditMode ?
    // <div>
    //   <input type = "text" defaultValue = {term}/>
    //   <button onClick = {this.changeEditMode}>X</button>
    //   <button onClick = {this.updateTerm}>OK</button>
    // </div> :
    // <div>{term}</div>
    return (
      <div>{term}</div>
    )
  }


}

export default TermEntry;