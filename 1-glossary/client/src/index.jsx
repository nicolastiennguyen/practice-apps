import React from "react";
import $ from 'jquery';
import { render } from "react-dom";
import ReactDOM from "react-dom";
import WordList from "./components/WordList.jsx"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DisplayWords: [],
      AllWords: []
    }
  }

  componentDidMount() {
    axios.get('/glossary')
      .then((res) => {
        console.log(res.data)
        this.setState({
          DisplayWords: res.data,
          AllWords: res.data
        })
      })
  }

  render() {
    return (
      <div>
      <h1>Glossary</h1>
      <WordList AllWords = {this.state.AllWords}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));