import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      option: 'Characters',
      savedCards: []
    }
  }
  onOptionChange = (option) => {
    this.setState({ option });
  }
  addCard = (text, curOption) => {
    this.setState({
      savedCards: [...this.state.savedCards, {
        text,
        curOption
      }]
    })
  }
  render() {
    return (
      <div className="App">
        <Title
          option={this.state.option}
        />
        <Form
          onOptionChange={this.onOptionChange}
          addCard={this.addCard}
        />
        {
          this.state.savedCards.length > 0
          &&
          <div>
            <h2>Saved Cards</h2>
            <List
              onOptionChange={this.onOptionChange}
              savedCards={this.state.savedCards}
            />
          </div>
        }
      </div>
    );
  }
}

export default App;
