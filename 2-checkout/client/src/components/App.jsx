import React from 'react';
import HomePage from './HomePage.jsx'
import FirstForm from './FirstForm.jsx'
import SecondForm from './SecondForm.jsx'
import ThirdForm from './ThirdForm.jsx'
import ConfirmationPage from './ConfirmationPage.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changePage = this.changePage.bind(this);
  }

  changePage(page, obj) {
    this.setState({page: page, data: obj});
  }

  render() {
    let CurrentPage = <div>{<HomePage changePage = {this.changePage}/>}</div>
    switch(this.state.page) {
      case 0:
        CurrentPage = <div>{<HomePage changePage = {this.changePage} />}</div>
        break;
      case 1:
        CurrentPage = <div>{<FirstForm changePage = {this.changePage}/>}</div>
        break;
      case 2:
        CurrentPage = <div>{<SecondForm changePage = {this.changePage} rollingData = {this.state.data}/>}</div>
        break;
      case 3:
        CurrentPage = <div>{<ThirdForm changePage = {this.changePage} rollingData = {this.state.data}/>}</div>
        break;
      case 4:
        CurrentPage = <div>{<ConfirmationPage changePage = {this.changePage} rollingData = {this.state.data}/>}</div>
        break;
    }
    return (
      <div>
        {CurrentPage}
      </div>
    )
  }
}

export default App;