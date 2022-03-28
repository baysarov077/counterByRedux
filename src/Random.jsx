import React from 'react';
import { useDispatch } from 'react-redux';

const Random = () => {
  const dispatch = useDispatch()

  const random = () => {
    dispatch({type: 'random'})
  }
  return (
    <button className='random' onClick={random}>Random</button>
  );
};

export default Random;