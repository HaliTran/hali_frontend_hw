import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Houses from './pages/Houses';
import Search from './pages/Search';

export default function Navbar() {
  return (
    <div className='w-75 m-auto text-center'>
      <nav className='navbar navbar-expand-sm justify-content-center'>
        <ul className='navbar-nav'>
          <li className='nav-link'>
            <Link to='/' className='text-decoration-none'>
              Home
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/search' className='text-decoration-none'>
              Search
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/houses' className='text-decoration-none'>
              Houses
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/houses' element={<Houses />}></Route>
      </Routes>
    </div>
  );
}
