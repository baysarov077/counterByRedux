import React from 'react';
import { useDispatch } from 'react-redux';

const Increment = () => {

  const dispatch = useDispatch()

  const increment = () => {
    dispatch({type: 'plus'})
  }

  return (
    <button className='increment' onClick={increment}>
      Plus
    </button>
  );
};

export default Increment;