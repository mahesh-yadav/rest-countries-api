import React from 'react';
import styles from './searchinput.module.css';

function SearchInput({value, onValueChange}){
    return(
        <div className={styles.SearchInput}>
            <i className="fas fa-search"></i>
            <input value={value} onChange={(e) => onValueChange(e.target.value)} placeholder="Search for a country..."
            className={styles['form-control']} ></input>
        </div>
    )
}

export default SearchInput;