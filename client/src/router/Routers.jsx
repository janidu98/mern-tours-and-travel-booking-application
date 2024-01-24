import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import About from '../pages/About';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/tour' element={<Tour />}/>
      <Route path='/tour/search' element={<SearchResultList />}/>
      <Route path='/tour/:id' element={<TourDetails />}/>
    </Routes>
  )
}

export default Routers
