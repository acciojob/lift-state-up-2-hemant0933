import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [text,setText] = useState('');
    
    const handleChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div className='parent'>
      <h1>Parent Component</h1><br/>
      <p>{text}</p>
      <Child text={text} handleChange={handleChange} />

    </div>
  );
}

export default Parent;

