import React, { useEffect, useState } from 'react'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import TourCard from '../../shared/TourCard'
import axios from 'axios'

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeaturedTourList = () => {

//   const {data: featuredTours, loading, error} = useFetch(
//     'http://localhost:3000/api/tour/search/getFeaturedTour'
//  );

//   console.log(featuredTours);



  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                axios('http://localhost:3000/api/tour/search/getFeaturedTour')
                .then((result) => {
                  setData(result.data);
                  setLoading(false);
                  //console.log(result.data);
                })
                .catch((error) => {
                  setError(error.message);
                  //console.log(error);
                });

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);




  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && !error && data?.map((tour) => (
        <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}>
            <TourCard tour={tour}/>
        </Col>
      ))}
    </>
  )
}

export default FeaturedTourList
