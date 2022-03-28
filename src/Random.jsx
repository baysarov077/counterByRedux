import React from 'react';
import { useDispatch } from 'react-redux';

const Random = () => {
  const dispatch = useDispatch()

  const random = () => {
    const getRandom = Math.floor(Math.random() * 100)
    dispatch({type: 'random', payload: getRandom})
  }
  return (
    <button className='random' onClick={random}>Random</button>
  );
};

export default Random;