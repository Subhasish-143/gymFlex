import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from '../src/pages/home/Home'
import About from './pages/about/About';
import Exercises from './pages/exercises/Exercises';
import Gallery from './pages/gallery/Gallery';
import Plan from './pages/plan/Plan'
import Trainers from './pages/trainers/Trainers';
import NoContent from './pages/nocontent/NoContent';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='exercises' element={<Exercises/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='plans' element={<Plan/>}/> 
          <Route path='trainers' element={<Trainers/>}/>
          <Route path='*' element={<NoContent/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
