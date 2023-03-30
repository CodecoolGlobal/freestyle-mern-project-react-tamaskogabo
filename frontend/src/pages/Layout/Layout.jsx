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
              <Link to={'/'} className='layout-links'>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/create'} className='layout-links'>
                Create Movie
              </Link>
            </li>
            <li className='Welcome'>PopcornDB 👽</li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
