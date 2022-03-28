import React from 'react';
import { useSelector } from 'react-redux';
import Increment from './Increment.jsx'
import Decrement from './Decrement.jsx';
import Reset from './Reset.jsx';
import Random from './Random.jsx';

const App = () => {

  const number = useSelector(state => state.number)

  return (
    <div className='container'>
      <div className='counter'>{number}</div>
      <div className="buttons">
        <Increment />
        <Decrement />
        <Reset />
        <Random />
      </div>
    </div>
  );
};

export default App;