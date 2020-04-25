import React from 'react';
import styles from "./Game.module.css"

const Counter = (props) => {
    return <div className={styles.counter}>{props.score}</div>
}

export default Counter