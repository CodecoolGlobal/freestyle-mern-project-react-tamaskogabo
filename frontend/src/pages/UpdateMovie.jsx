import React from 'react';
import { useLocation } from 'react-router-dom';

export default function UpdateMovie() {
  const { state } = useLocation();
  console.log(state);
  return <div>UpdateMovie</div>;
}
