import React from "react";
import $ from 'jquery';
import { render } from "react-dom";
import ReactDOM from "react-dom";
import TermList from "./components/TermList.jsx"
import axios from "axios"
import seedData from "./seedData.jsx"
import Search from "./components/Search.jsx"
import AddWord from "./components/AddWord.jsx"
import AddDefinition from "./components/AddDefinition.jsx"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      wordEntry: '',
      definitionEntry: '',
      DisplayedTerms: [],
      AllTerms: []
    };
    this.handleSubmit = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    axios.get('/glossary')
      .then((res) => {
        this.setState({
          DisplayedTerms: res.data,
          AllTerms: res.data
        })
      })
  }

  handleSearch(e) {
    let filteredTerms = this.state.DisplayedTerms.filter((term) => {
      return term.word.toLowerCase().includes(e.target.value.toLowerCase())
    })
    if (filteredTerms.length === 0) {
      this.setState({DisplayedTerms:[{word: 'no words by that name found'}]})
    } else {
      this.setState({DisplayedTerms:filteredTerms})
    };
    this.setState({search: e.target.value});
    if (e.target.value === '') {
      this.setState({DisplayedTerms:seedData})
    }
  }

  handleAdd(definitionEntry) {
    // let wordEntry = this.state.wordEntry;
    // let definitionEntry = this.state.definitionEntry;
    this.setState({
      // wordEntry: wordEntry,
      definitionEntry: definitionEntry
    })
    console.log(this.state.definitionEntry, 'state here')
    // if (wordEntry !== '' && definitionEntry !== '') {
    //   // axios.post
    //   // axios.get
    // }
  }

  render() {
    return (
      <div>
      <h1>Glossary</h1>
      <h4>There are {this.state.DisplayedTerms.length} terms in your glossary.</h4>
      <form onSubmit = {this.handleAdd}>
        Add your own Words and Definitions here:
        <AddWord wordEntry = {this.state.wordEntry} handleAdd = {this.handleAdd}/>
        <AddDefinition definitionEntry = {this.state.definitionEntry} onDefinitionEntryChange = {this.handleAdd}/>
        <button type = "submit"> Enter </button>
      </form>
      <Search handleSearch = {this.handleSearch}/>
      <TermList DisplayedTerms = {this.state.DisplayedTerms}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));