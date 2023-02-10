import React, { useState } from 'react';
import style from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button className={style.btn} onClick={onClick}>
        Button
      </button>
    </div>
  );
};

export default Counter;
