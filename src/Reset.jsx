import React from 'react';
import { useDispatch } from 'react-redux';

const Reset = () => {
  const dispatch = useDispatch()

  const reset = () => {
    dispatch({type: 'reset'})
  }
  return (
    <button className='reset' onClick={reset}>Reset</button>
  );
};

export default Reset;