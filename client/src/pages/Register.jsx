import React, { useContext, useState } from 'react'
import '../styles/login.css'

import {Container , Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined
  })

  const handleChange = (e) => {
      setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();

      axios.post('http://localhost:3000/api/auth/register', JSON.stringify(credentials), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
          dispatch({type: 'REGISTER_SUCCESS'});
          navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      })

  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Register</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
