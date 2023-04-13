import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import Fade from 'react-reveal/Fade';


export default function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Fade top>
        <div className='Layout'>
          <nav>
            <ul>
              <li>
                <Link to={'/'} className='layout-links'>
                  Home
                </Link>
              </li>
              {loggedIn && (
                <li>
                  <Link to={'/create'} className='layout-links'>
                    Create Movie
                  </Link>
                </li>
              )}
              <li className='Welcome'>PopcornDB 👽</li>
            </ul>
          </nav>
        </div>
      </Fade>
      <Outlet context={[setLoggedIn]} />
    </>
  );
}
