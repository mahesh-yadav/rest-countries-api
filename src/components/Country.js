import React from 'react';
import styles from './country.module.css';
import {useHistory} from 'react-router-dom';

function Country({country: {name, population, region, capital, flag}}){

    const history = useHistory();

    return(
        <div className={styles.Country} onClick={() => history.push(`/${name.toLowerCase()}`)}>
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