import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from './bordercountries.module.css';

function BorderCountries({countryCodes, countries}){

    const history = useHistory();

    const borderCountries = countryCodes.map((code) => {
        const country = countries.find((c) => c.alpha3Code === code);
        return country;
    });

    return(
        <div className={styles['countries']}>
            {
                borderCountries.map((country) => <button onClick={() => history.push(`/${country.name.toLowerCase()}`)} className={styles['btn-country']}>{country.name}</button>)
            }
        </div>
    )
}

export default BorderCountries;