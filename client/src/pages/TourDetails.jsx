import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const TourDetails = () => {

  const {id} = useParams();

  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const [tour, setTour] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/tour/get/${id}`)
    .then((result) => {
      setTour(result.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
      console.log(error);
    })
  }, []);

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

  // const [addReviews, setAddReviews] = useState(reviews);

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  //format date
  const options = {day: "numeric", month: "long", year: "numeric"};

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewText = reviewMsgRef.current.value;
    
    if(!user || user === undefined || user === null){
      alert('Please sign in');
    }

    const reviewObj = {
      username: user.data.username,
      reviewText,
      rating: tourRating
    }
    console.log(reviewObj);
    axios.post(`http://localhost:3000/api/review/create-review/${id}`, JSON.stringify(reviewObj), {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((result) => {
      alert('Review submitted')
      //console.log(result.data);
      //setAddReviews()
      setLoading(false);
    })
    .catch((error) => {
      alert(error.message)
      setLoading(false);
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
  },[])

  return (
    <>
      <section>
        <Container>
          {loading && <h4>Loading...</h4>}
          {error && error}
          {!loading && !error && 
            <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className='tour__rating d-flex align-items-center gap-1'>
                        <i class='ri-star-fill' style={{color: "var(--secondary-color)"}}></i> 
                        {avgRating === 0 ? null : avgRating} {totalRating === 0 ? 'Not rated' : (<span>({reviews?.length})</span>)}                      
                    </span>

                    <span><i class="ri-map-pin-user-fill"></i>{address}</span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> ${price} /per person
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i> {distance} k/m
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* Tour reviews section */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i className="ri-star-s-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required/>
                      <button className="btn primary__btn text-white" type='submit'>Submit</button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review => (
                      <div className="review__item" key={review._id}>
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString("en-US", options)}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}<i class="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>

    
  )
}

export default TourDetails
