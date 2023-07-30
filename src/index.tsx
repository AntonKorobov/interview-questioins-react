import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { App } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'about',
    element: (
      <div>
        <h2>About page</h2>
        <Link to="/">Main page</Link>
      </div>
    )
  }
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
