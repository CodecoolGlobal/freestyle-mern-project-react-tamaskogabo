import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div>Menu</div>
      <Link to={'/'}>Home</Link>
      <Link to={'/update'}>Update</Link>
      <Outlet />
    </>
  );
}
