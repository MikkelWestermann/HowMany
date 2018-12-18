import React from 'react';
import './Title.css'

const Title = (props) => {
  return (
    <div className='title'>
      <h1>How Many <span className='title-option'>{props.option}</span>?</h1>
      <h1>Let's Count 'em</h1>
    </div>
  );
}

export default Title;
