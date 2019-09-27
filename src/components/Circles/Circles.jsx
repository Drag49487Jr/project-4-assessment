import React from 'react';
import styles from './Circles.module.css';

const Circles = (props) => (
    <div className={styles.Circles}>
        {props.nums.map((nums, idx) =>  
        <div className={props.circlesIdx === idx ? styles.selected:''}>{nums + 1}</div>
            )}
    </div>
);

export default Circles;