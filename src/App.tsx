import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const App: FC = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Link to="about">About Us</Link>
    </div>
  );
};
