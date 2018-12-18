import React, { Component } from 'react';
import Text from './Text';

class List extends Component {
  render() {
    return(
      <div>
        {
          this.props.savedCards.map((card, i) => {
            return <Text isInList={true} onOptionChange={this.props.onOptionChange} text={card.text} curOption={card.curOption} key={i}/>
          })
        }
      </div>
    );
  }
}

export default List;
