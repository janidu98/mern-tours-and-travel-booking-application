import React, { useContext, useState } from 'react'
import '../styles/login.css'

import {Container , Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const handleChange = (e) => {
      setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    //navigate('/home');
    dispatch({type: 'LOGIN_START'});
    
      axios.post('http://localhost:3000/api/auth/login', JSON.stringify(credentials), {
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        
      })
      .then((result) => {
        console.log(result.data);
  
        dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
        navigate('/home');
      })
      .catch((error) => {

        dispatch({type: 'LOGIN_FAILURE', payload: error.message});
      })
      //alert('after');
      

    
    
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
