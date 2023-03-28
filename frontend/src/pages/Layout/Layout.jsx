import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <div className='Layout'>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='Logo'>Welcome to PopcornDB</li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
