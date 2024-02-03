import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import tourData from '../assets/data/tours'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import axios from 'axios'

const Tour = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [tours, setTours] = useState([]);
  const [tourCount, setTourCount] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {

    axios.get(`http://localhost:3000/api/tour/get?page=${page}`)
    .then((result) => {
      setTours(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
  
    axios.get('http://localhost:3000/api/tour/search/getTourCount')
    .then((result) => {
      setTourCount(result.data);
    })
    .catch((error) => {
      console.log(error);
    })


    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);

    //window.scrollTo(0,0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title={"All Tours"}/>

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>

          {loading && <h4>Loading...</h4>}
          {error && error}

          {!loading && !error && 
            <Row>
            {
              tours?.map((tour) => (
                <Col lg="3" className='mb-4' key={tour._id}>
                  <TourCard tour={tour}/>
                </Col>
              ))
            }
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)} className={page === number ? "active__page" : ""}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
          }
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Tour
