import React from 'react';

const Child = (props) => {
  return (
    <div className='child'>
        <h2>Child Component</h2>
      <input type='text' value={props.text} onChange={props.handleChange}/>
    </div>
  );
}

export default Child;
