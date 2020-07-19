import React from 'react';
import styles from './loading.module.css';

function Loading(){
    return(
        <div className={styles.Loading}>
            <i className={`${styles['Loading-icon']} fas fa-globe-asia`}></i>
            <span className={styles['Loading-text']}>Loading Countries ...</span>
        </div>
    )
}

export default Loading;