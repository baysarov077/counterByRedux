import React from 'react';
import { useDispatch } from 'react-redux';

const Decrement = () => {

  const dispatch = useDispatch()

  const decrement = () => {
    dispatch({ type: 'minus' })
  }

  return (
    <button className='decrement' onClick={decrement}>
      Minus
    </button>
  );
};

export default Decrement;