import React, { useState } from 'react';

import styles from './Counter.module.css';

function Counter () {
    // let count = 400;
    const [count, setCount] = useState(0);

    function handleClick(diff) { 
        setCount(count + diff);
    }

    return (
        <div className={ styles.container }>
            <button onClick={ () => handleClick(1) } className={ styles.btn }>+</button>
            <button onClick={ () => handleClick(-1) } className={ styles.btn }>-</button>
            <strong className={ styles.output }>{ count }</strong>
        </div>
    )
}

export default Counter;
