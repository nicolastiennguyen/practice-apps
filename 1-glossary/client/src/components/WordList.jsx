import React from 'react'

const WordList = (props) => {
  const words = props.AllWords.map((word) => <h2 key = {word._id}>{word.word}</h2>)
  return words
}

export default WordList