import React from 'react'
import Edit from './Edit.jsx'

const TermList = (props) => {
  const terms = props.DisplayedTerms.map((term) =>
  <div key = {term._id}>
    {term.word}{": "}{term.definition}
    <Edit term = {term}/>
  </div>
  )
  return terms
}

export default TermList