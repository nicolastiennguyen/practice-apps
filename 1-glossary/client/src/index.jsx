import React from "react";
import $ from 'jquery';
import { render } from "react-dom";
import ReactDOM from "react-dom";
import TermList from "./components/TermList.jsx"
import axios from "axios"
import Search from "./components/Search.jsx"
import AddWord from "./components/AddWord.jsx"
import AddDefinition from "./components/AddDefinition.jsx"
// import TermEntry from "./components/TermEntry.jsx"


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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onWordEntryChange = this.onWordEntryChange.bind(this);
    this.onDefinitionEntryChange = this.onDefinitionEntryChange.bind(this);
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

  // idea: filter based on database terms, so that we don't keep filtering based on the current state
  // this may fix the issue of deleting characters on search and not re-filtering properly
  handleSearch(e) {
    let filteredTerms = this.state.DisplayedTerms.filter((term) => {
      return term.word.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log(this.state.DisplayedTerms)
    if (filteredTerms.length !== 0) {
      this.setState({DisplayedTerms:filteredTerms})
    } else {
      this.setState({DisplayedTerms:[{word: 'no words by that name found'}]})
    }
    if (e.target.value === '') {
      axios.get('glossary')
      .then((res) => {
        this.setState({DisplayedTerms: res.data})
      })
    }
}

  handleSubmit(e) {
    e.preventDefault();
    let wordEntry = this.state.wordEntry;
    let definitionEntry = this.state.definitionEntry;
    if (wordEntry !== '' && definitionEntry !== '') {
      axios.post('/glossary', {
        word: wordEntry,
        definition: definitionEntry
      })
      .then(axios.get('/glossary')
        .then((res) => {
          this.setState({
            DisplayedTerms: res.data,
            AllTerms: res.data
          })
        }))
    } else if (wordEntry === '' && definitionEntry === '') {
      alert('Please enter in a word & definition.')
    } else if (wordEntry === '') {
      alert('Please enter in a word.')
    } else {
      alert('Please enter in a definition.')
    }
  }

  onWordEntryChange(wordEntry) {
    this.setState({
      wordEntry: wordEntry,
    })
  }

  onDefinitionEntryChange(definitionEntry) {
    this.setState({
      definitionEntry: definitionEntry
    })
  }

  render() {
    return (
      <div>
      <h1>Glossary</h1>
      <h4>There are {this.state.DisplayedTerms.length} terms in your glossary.</h4>
      <form onSubmit = {this.handleSubmit}>
        Add your own Words and Definitions here:
        <AddWord onWordEntryChange = {this.onWordEntryChange}/>
        <AddDefinition onDefinitionEntryChange = {this.onDefinitionEntryChange}/>
        <button type = "submit"> Enter </button>
      </form>
      <Search handleSearch = {this.handleSearch}/>
      <TermList DisplayedTerms = {this.state.DisplayedTerms}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));