import {useEffect, useState} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // try {
            //     const res = await fetch(url);
            //     console.log(res);
            //     if(!res.ok){
            //         setError('Fail to fetch');
            //         alert('Fail to fetch');
            //     }

            //     const result = await res.json();
            //     setData(result.data);
            //     //console.log(data);

            // } catch (error) {
            //     setError(error.message);
            //     setLoading(false);
            // }

            try {
                axios(url)
                .then((result) => {
                  setData(result.data);
                  setLoading(false);
                  console.log(result.data);
                })
                .catch((error) => {
                  console.log(error);
                });

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
    }
}

export default useFetch
