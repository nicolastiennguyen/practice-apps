import React from 'react'
import Edit from './Edit.jsx'
import Delete from './Delete.jsx'

class TermList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false
    }
    this.changeEditMode = this.changeEditMode.bind(this)
    this.updateTerm = this.updateTerm.bind(this)
  }

  changeEditMode = () => {
    this.setState({
      inEditMode: !this.state.inEditMode
    })
  }

  updateTerm = () => {
    this.setState({
      inEditMode: false
    })
  }

  render() {
    let terms = this.props.DisplayedTerms.map((term) => {
      return this.state.inEditMode ?
      <div>
        <input type ="text"/>
        <button onClick={this.changeEditMode}>X</button>
        <button onClick={this.updateTerm}>OK</button>
      </div>
      :
      <div onClick={this.changeEditMode}>
        {term.word + ': ' + term.definition}
      </div>
    })

    return (
      <div>
      {terms}
      </div>
    )
  }
}

export default TermList