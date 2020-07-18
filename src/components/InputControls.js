import React from 'react';
import SearchInput from './SearchInput';
import styles from './inputcontrols.module.css';
import RegionDropDown from './RegionDropDown';

function InputControls({searchValue, onSearchValueChange , selectedFilter, onChangeSelectedFilter}) {
    return(
        <div className={styles.InputControls}>
            <SearchInput value={searchValue} onValueChange={onSearchValueChange}/>
            <RegionDropDown selectedFilter={selectedFilter} onChangeSelectedFilter={onChangeSelectedFilter}/>
        </div>
    )
}

export default InputControls;