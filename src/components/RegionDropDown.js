import React, {useState} from 'react';
import styles from './regiondropdown.module.css';

function RegionDropDown({selectedFilter, onChangeSelectedFilter}){

    const [open, setOpen] = useState(false);

    const changeFilter = (filter) => {
        onChangeSelectedFilter(filter);
        setOpen(false);
    }

    return(
        <div className={styles['dropdown']}>
            <div className={styles['selected']} onClick={() => setOpen(!open)}>
                <span>{selectedFilter}</span>
                <i  className={open ? `${styles.rotate} fas fa-angle-down` : 'fas fa-angle-down'}></i>
            </div>
            <ul className={styles['dropdown-list']} style={{display: open ? 'block' : 'none'}}>
                {
                 selectedFilter !== 'Filter by Region' && <li className={styles['dropdown-item']} onClick={() => changeFilter('Filter by Region')}>All</li>  
                }
                <li className={styles['dropdown-item']} onClick={() => changeFilter('Africa')}>Africa</li>
                <li className={styles['dropdown-item']} onClick={() => changeFilter('Americas')}>Americas</li>
                <li className={styles['dropdown-item']} onClick={() => changeFilter('Asia')}>Asia</li>
                <li className={styles['dropdown-item']} onClick={() => changeFilter('Europe')}>Europe</li>
                <li className={styles['dropdown-item']} onClick={() => changeFilter('Oceania')}>Oceania</li>
            </ul>
        </div>
    );
}

export default RegionDropDown;