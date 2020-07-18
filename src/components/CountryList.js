import React from 'react';
import Country from './Country';
import styles from './countrylist.module.css';
import data from '../country.json';

function CountryList({countries}){
    return(
        <div className={styles.CountryList}>
            {
                [{...data},{...data},{...data},{...data},{...data}].map((country) => <Country country={country}/>)
            }
        </div>
    )
}

export default CountryList;