import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.curOption || 'Characters',
      text: this.props.text || '',
      count: 0,
      isWith: true
    }
  }
  handleChangeOption = (option, isWith) => {
    this.setState({
      option,
      isWith
    })
    if (!this.props.isInList) {
      this.props.onOptionChange(option);
    }
  }
  onTextChange = (event) => {
    this.setState({ text: event.target.value })
    if (!this.props.isInList) {
      this.props.setData(event.target.value, this.state.option)
    }
  }
  count = (split) => {
    return this.state.text.split(split);
  }
  textareaClasses = () => {
    if (this.props.isInList) {
      return 'textareaList'
    } else {
      return 'textareaForm'
    }
  }
  backgroundClasses = () => {
    if (this.props.isInList) {
      return 'textList'
    } else {
      return 'textForm'
    }
  }
  textareaSize = () => {
    if (this.props.isInList) {
      return '25'
    } else {
      return '35'
    }
  }
  calculateCount = () => {
    switch (this.state.option) {
      case 'Characters':
        if (this.state.isWith) {
          return this.count('').filter(character => character !== '\n' && character !== '').length;
        } else {
          return this.count('').filter(character => character !== '\n' && character !== '' && character !== ' ').length;
        }
      case 'Letters':
        return this.count('').filter(character => character.toLowerCase().match(/[a-z]/i)).length;
      case 'Words':
        const data = this.count('\n').map(item => item.split(' '));
        const mergedData = [].concat(...data);
        return mergedData.filter(character => character !== ' ' && character !== '\n' && character !== '').length;
      case 'Paragraphs':
        return this.count('\n').filter(item => item !== '\n' && item !== '' && item !== ' ').length;
      default:
        return 'Mistakes Were Made'
    }
  }
  render() {
    return(
      <div className={`text ${this.backgroundClasses()}`}>
        <textarea rows='10' cols={this.textareaSize()} value={this.state.text} onChange={this.onTextChange}></textarea>
        <div className='info'>
          <ul>
            <li className='first-li' ><strong>Options:</strong></li>
            <li onClick={() => this.handleChangeOption('Characters', true)}>Characters w/ spaces</li>
            <li onClick={() => this.handleChangeOption('Characters', false)}>Characters w/o spaces</li>
            <li onClick={() => this.handleChangeOption('Letters', false)}>Letters (w/o numbers)</li>
            <li onClick={() => this.handleChangeOption('Words', false)}>Words</li>
            <li onClick={() => this.handleChangeOption('Paragraphs', false)} className='last-li'>Paragraphs</li>
          </ul>
          <p>Number of {this.state.option}</p>
          <p className='count'>{this.calculateCount()}</p>
        </div>
      </div>
    );
  }
}

export default Text;
