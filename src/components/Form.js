import React, { Component } from 'react';
import Text from './Text';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      curOption: '',
      cardText: 'Save This Card',
      buttonClass: 'blue'
    }
  }

  setData = (text, curOption) => {
    this.setState({
      text,
      curOption
    })
  }

  handleAddCard = () => {
    this.props.addCard(this.state.text, this.state.curOption);
    this.setState({
      cardText: 'Card Saved',
      buttonClass: 'green'
    })
    setTimeout(() => {
      this.setState({
        cardText: 'Save This Card',
        buttonClass: 'blue'
      })
    }, 3000);
  }

  render() {
    return(
      <div className='form'>
        <h1>Write Something!</h1>
        <Text isInList={false} onOptionChange={this.props.onOptionChange} setData={this.setData}/>
        <button className={this.state.buttonClass} onClick={this.handleAddCard}>{this.state.cardText}</button>
      </div>
    );
  }
}

export default Form;
