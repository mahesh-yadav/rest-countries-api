import React from 'react';
import Country from './Country';
import styles from './countrylist.module.css';

function CountryList({countries}){
    return(
        <div className={styles.CountryList}>
            {
                countries.map((country) => <Country key={country.alpha2Code} country={country}/>)
            }
        </div>
    )
}

export default CountryList;