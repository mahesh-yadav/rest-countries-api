import React, {useState} from 'react';
import InputControls from './InputControls';
import CountryList from './CountryList';
import useFetch from '../hooks/useFetch';

function Home(){

    const {loading, data, error} = useFetch('https://restcountries.eu/rest/v2/all');

    const [searchValue, setSearchValue] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('Filter by Region');

    const inSelectedRegion = (country) => {
        if(selectedFilter === 'Filter by Region') return true;

        return country.region === selectedFilter;
    }

    const matchSearch = (country) => {
        if(searchValue === '') return true;

        return country.name.toLowerCase().includes(searchValue.toLowerCase());
    }

    let countries = null;

    if(loading){
        countries = <p>Loading...</p>;
    } else if(error){
        countries = <p>Error fetching countries</p>;
    } else if(data){
        countries = <CountryList countries={data.filter((country) => inSelectedRegion(country)).filter((country) => matchSearch(country))}/>;
    }
    return(
        <div>
            <InputControls searchValue={searchValue} onSearchValueChange={setSearchValue} selectedFilter={selectedFilter} onChangeSelectedFilter={setSelectedFilter}/>
            {
                countries
            }
        </div>
    );
}

export default Home;