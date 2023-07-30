import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const App: FC = () => {
  return (
    <div>
      <Link to="class-components">Class component</Link>
    </div>
  );
};
