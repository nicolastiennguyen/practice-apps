import React from 'react'
import Edit from './Edit.jsx'
import Delete from './Delete.jsx'

const TermList = (props) => {
  const terms = props.DisplayedTerms.map((term) =>
  <div key = {term._id}>
    {term.word}{": "}{term.definition}
    <Edit term = {term}/>
    <Delete term = {term}/>
  </div>
  )
  return terms
}

export default TermList