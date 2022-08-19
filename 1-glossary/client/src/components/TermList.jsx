import React from 'react'
import Edit from './Edit.jsx'
import Delete from './Delete.jsx'

class TermList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let terms = this.props.DisplayedTerms.map((term) => {
      return <div>{term.word + ': ' + term.definition}</div>
    })
    return (
      <div>
      {terms}
      </div>
    )
  }
}

export default TermList