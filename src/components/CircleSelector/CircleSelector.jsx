import React from 'react';
import styles from './CircleSelector.module.css';

const CircleSelector = (props) => (
    <div className={styles.CircleSelector}>
        {props.nums.map((nums,idx) =>
        <button 
            className={props.buttonsIdx === idx ? styles.selected : ''}
            onClick={()=>props.handleClick(idx)}>Select Circle {nums + 1}</button>
        )}
    </div>
);

export default CircleSelector;