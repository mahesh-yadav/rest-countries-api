import React from 'react';
import styles from './country.module.css';

function Country({country: {name, population, region, capital, flag}}){
    return(
        <div className={styles.Country}>
            <div className={styles['flag-img']}>
                <img src={flag} alt={name}/>
            </div>
            <div className={styles['country-details']}>
                <h2>{name}</h2>
                <p>Population: <span>{population.toLocaleString()}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
    )
}

export default Country;