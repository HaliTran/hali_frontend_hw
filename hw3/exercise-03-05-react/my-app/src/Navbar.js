import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Houses from './pages/houses';
import Search from './pages/search';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/houses">Houses</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/houses" element={<Houses />}></Route>
      </Routes>
    </div>
  );
}
