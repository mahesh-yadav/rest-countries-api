import {useState, useEffect} from 'react';

function useFetch(uri){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if(!uri) return;

        async function getCountries(){
            try {

                setLoading(true);

                const response = await fetch(uri);
                const data = await response.json();

                setData(data);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false);
            }
        }

        getCountries();

    }, [uri]);

    return {
        loading,
        data,
        error
    }
}

export default useFetch;