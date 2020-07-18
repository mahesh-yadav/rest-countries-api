import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import styles from './app.module.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const cssClass = darkMode ? `${styles['dark-theme']}` : `${styles['light-theme']}`;

  return (
    <>
      <input type="checkbox" id="theme-toggler" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} hidden/>
      <div className={cssClass}>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
