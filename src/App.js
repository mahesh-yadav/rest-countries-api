import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import styles from './app.module.css';
import {Switch, Route} from 'react-router-dom';

import useFetch from './hooks/useFetch';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const {loading, data: countries, error} = useFetch('https://restcountries.eu/rest/v2/all');

  const cssClass = darkMode ? `${styles['dark-theme']}` : `${styles['light-theme']}`;

  return (
    <>
      <input type="checkbox" id="theme-toggler" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} hidden/>
      <div className={cssClass}>
        <Header />
          <Switch>
            <Route path="/" exact>
              <Home {...{loading, countries, error}}/>
            </Route>
            <Route path="/:name">
              <CountryDetails countries={countries}/>
            </Route>
          </Switch>
      </div>
    </>
  );
}

export default App;
