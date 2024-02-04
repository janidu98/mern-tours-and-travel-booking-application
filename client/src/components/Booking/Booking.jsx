import React, { useContext, useState } from 'react'
import './booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx'
import axios from 'axios'

const Booking = ({tour, avgRating}) => {

    const {price, reviews, title} = tour;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user.data && user.data._id,
        userEmail: user.data && user.data.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    })

    const handleChange = (e) => {
      setBooking(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    const handleClick = (e) => {
        e.preventDefault();

        console.log(booking);

        if(!user || user === undefined || user === null){
          alert('Please sign in');
        }
    
        axios.post(`http://localhost:3000/api/booking/create-booking`, JSON.stringify(booking), {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        })
        .then((result) => {
          navigate('/thank-you');
        })
        .catch((error) => {
          alert(error.message)
        })
        
        
    }

  return (
    <div className='booking'>
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/per person</span></h3>

        <span className='tour__rating d-flex align-items-center'>
                      <i class='ri-star-fill'></i> 
                      {avgRating === 0 ? null : avgRating} ({reviews?.length})                    
        </span>
      </div>

      {/* Booking form */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                <input type="number" placeholder='Guest Amount' id='guestSize' required onChange={handleChange} />
            </FormGroup>
        </Form>
      </div>

      {/* Booking bottom */}
      <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-line"></i> 1 person</h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        
        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  )
}

export default Booking
