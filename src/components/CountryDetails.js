import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import BorderCountries from './BorderCountries';
import styles from './countrydetails.module.css';

function CountryDetails({ countries = [] }) {
  const { name } = useParams();
  const history = useHistory();

  const country = countries.find(
    (country) => country.name.toLowerCase() === name
  );

  if (!country) return null;

  const formatCurrencies = (currencies) => {
    currencies = currencies.map((c) => c.name);
    return currencies.join(', ');
  };

  const formatLanguages = (languages) => {
    languages = languages.map((l) => l.name);
    return languages.join(', ');
  };

  return (
    <div className={styles.CountryDetails}>
      <div>
        <button className={styles['btn-back']} onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>
      </div>
      <div className={styles['container']}>
        <div className={styles['flag-img']}>
          <img src={country.flag} alt={`${country.name}'s Flag`} />
        </div>
        <div className={styles['details']}>
          <h2 className={styles['country-name']}>{country.name}</h2>
          <div className={styles['lists']}>
            <ul className={[styles['list'], styles['list-1']].join(' ')}>
              <li className={styles['list-item']}>
                Native Name: <span>{country.nativeName}</span>
              </li>
              <li className={styles['list-item']}>
                Population: <span>{country.population.toLocaleString()}</span>
              </li>
              <li className={styles['list-item']}>
                Region: <span>{country.region}</span>
              </li>
              <li className={styles['list-item']}>
                Sub Region: <span>{country.subregion}</span>
              </li>
              <li className={styles['list-item']}>
                Capital: <span>{country.capital}</span>
              </li>
            </ul>
            <ul className={[styles['list'], styles['list-2']].join(' ')}>
              <li className={styles['list-item']}>
                Top Level Domain: <span>{country.topLevelDomain}</span>
              </li>
              <li className={styles['list-item']}>
                Currencies: <span>{formatCurrencies(country.currencies)}</span>
              </li>
              <li className={styles['list-item']}>
                Languages: <span>{formatLanguages(country.languages)}</span>
              </li>
            </ul>
          </div>
          <div className={styles['border']}>
            <h3>Border Countries:</h3>
            <BorderCountries
              countryCodes={country.borders}
              countries={countries}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
