import React from 'react';
import './style.css';

const InputFeild = () => {
  return (
    <form className='input'>
        <input className='input__box' type="text" placeholder='Enter a task'/>
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
};

export default InputFeild;
